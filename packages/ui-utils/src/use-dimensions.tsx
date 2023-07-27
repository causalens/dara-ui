/**
 * Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
 *
 * Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
 *
 * As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
 * use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
 */
import { useCallback, useLayoutEffect, useState } from 'react';

export interface DimensionObject {
    bottom: number;
    height: number;
    left: number;
    right: number;
    top: number;
    width: number;
    x: number;
    y: number;
}

export type UseDimensionsHook<T extends HTMLElement> = [(node: T) => void, { [k: string]: number }, T];

/**
 * The useDimensions hook allows for a component to track the dimensions of a given element by passing the returned ref
 * to it.
 *
 * @param liveMeasure whether to recalculate dimensions when the user scrolls or resizes the page.
 */
function useDimensions<T extends HTMLElement>(liveMeasure = true): UseDimensionsHook<T> {
    const [dimensions, setDimensions] = useState({});
    const [node, setNode] = useState<T>(null);

    const ref = useCallback((_node: T) => {
        setNode(_node);
    }, []);

    useLayoutEffect(() => {
        if (node) {
            const measure = (): number =>
                window.requestAnimationFrame(() => setDimensions(node.getBoundingClientRect()));
            measure();

            if (liveMeasure) {
                window.addEventListener('resize', measure);
                window.addEventListener('scroll', measure);

                return () => {
                    window.removeEventListener('resize', measure);
                    window.removeEventListener('scroll', measure);
                };
            }
        }
    }, [node]);

    return [ref, dimensions, node];
}

export default useDimensions;
