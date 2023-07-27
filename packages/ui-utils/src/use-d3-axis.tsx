/**
* Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
*
* Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
*
* As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
* use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
*/
import { ScaleLinear, ScaleTime, scaleLinear, scaleTime } from 'd3-scale';
import { useCallback, useMemo } from 'react';

import useDeepCompare from './use-deep-compare';

// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
export type AxisDomain = string | number | 'auto' | 'dataMin' | 'dataMax';

interface AxisProps<T> {
    domain?: [T, T];
    tickFormatter: (tick?: number) => string;
    ticks?: Array<number>;
    type: 'number' | 'category';
}

/**
 * An underlying helper hook that uses d3 to create a function for getting the axis properties for an axis based
 * on the pixel size of that axis. This hook should not be used directly, use one of the wrappers for it,
 * e.g. useD3LinearAxis or useD3TimeAxis
 *
 * @param data the underlying data for the axis
 * @param domain the target domain for the axis
 * @param getScale a function to get the d3Scale instance with domain applied
 * @param domainFormatter a function to translate the d3 domain back into a recharts domain
 */
export function useD3Axis<T>(
    data: Array<T>,
    getScale: (data: Array<T>, domain?: [T, T]) => any,
    domainFormatter: (domain: [any, any]) => [T, T],
    domain?: [T, T]
): (width?: number) => AxisProps<T> {
    const valueScale = useMemo(() => getScale(data, domain), useDeepCompare([data, domain]));

    return useCallback(
        (axisSize: number): AxisProps<T> => {
            const scale = valueScale.range([0, axisSize]).nice();
            return {
                domain: domainFormatter(scale.domain()),
                tickFormatter: scale.tickFormat(),
                ticks: scale.ticks(),
                type: 'number',
            };
        },
        [valueScale]
    );
}

/** Helper function for getting a linear d3Scale instance, based on data and domain */
const getLinearScale = (data: Array<number>, domain: [number, number]): ScaleLinear<number, number> => {
    return scaleLinear().domain([data ? Math.min(...data) : domain[0], data ? Math.max(...data) : domain[1]]);
};

/**
 * Hook that returns a function that generates the props for a linearly scaled axis based on the size in pixels of the
 * axis
 *
 * @param data the underlying data for the axis
 * @param domain the target domain for the axis
 */
export function useD3LinearAxis(
    data: Array<number>,
    domain?: [number, number]
): (axisSize?: number) => AxisProps<number> {
    return useD3Axis<number>(data, getLinearScale, (dm) => dm, domain);
}

/** Helper function for getting a time d3Scale instance, based on data and domain */
const getTimeScale = (data: Array<Date>, domain: [Date, Date]): ScaleTime<number, number> => {
    return scaleTime().domain([data ? data[0] : domain[0], data ? data[data.length - 1] : domain[1]]);
};

/**
 * Hook that returns a function that generates the props for a time scaled axis based on the size in pixels of the
 * axis
 *
 * @param data the underlying data for the axis
 * @param domain the target domain for the axis
 */
export function useD3TimeAxis(data: Array<Date>, domain?: [Date, Date]): (axisSize?: number) => AxisProps<Date> {
    return useD3Axis(data, getTimeScale, (dm) => dm, domain);
}

/**
 * Hook that returns a function that generates the props for an ordinal (categorical) scaled axis, doesn't actually use
 * the ordinal scale as it doesn't need to, but has the same returned api as the others so it can be substituted in.
 *
 * @param mapping a mapping dict that translates the numeric value to a label
 */
export function useD3OrdinalAxis(mapping: { [k: number]: string }): (axisSize?: number) => AxisProps<string> {
    return (): AxisProps<string> => {
        return {
            tickFormatter: (tick: number): string => mapping[tick],
            type: 'category',
        };
    };
}
