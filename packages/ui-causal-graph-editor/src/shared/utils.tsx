/**
* Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
*
* Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
*
* As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
* use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
*/
import { DefaultTheme } from '@darajs/styled-components';

import { NodeGroup, SimulationGraph } from '../types';

/**
 * Format a given name, i.e. a snake_case label to 'Sentence case'
 *
 * @param name name to format
 */
export function formatName(name: string): string {
    return name
        .split('_')
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
        .join(' ');
}

export function coerceToArray<T>(value: T | T[]): T[] {
    if (!value) {
        return [];
    }

    return Array.isArray(value) ? value : [value];
}

/**
 * A function that generates a tooltip to be displayed for nodes and edges
 *
 * @param id - the id of the Node or Edge to display on top
 * @param data - the key values pairs of data to be displayed
 * @param label - a label to show instead of the id and preserve the id for the key
 * @param tooltipSize - font size to use for the tooltip
 */
export function getTooltipContent(
    id: string,
    data: { [k: string]: any } | string,
    theme: DefaultTheme,
    label?: string,
    tooltipSize?: number
): JSX.Element {
    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <h2 style={{ fontSize: tooltipSize ? `${tooltipSize}px` : theme.font.size }}>{label ?? id}</h2>
            </div>
            {data && typeof data === 'object' && (
                <ul style={{ margin: 0, padding: 0, paddingLeft: '1rem', paddingTop: '1rem' }}>
                    {Object.keys(data).map((key) => (
                        <li key={`${id}-${String(data[key])}`}>
                            <p style={{ fontSize: tooltipSize ? `${tooltipSize}px` : theme.font.size }}>
                                <strong>{key}: </strong>
                                {data[key]}
                            </p>
                        </li>
                    ))}
                </ul>
            )}
            {data && typeof data === 'string' && (
                <span style={{ margin: 0, padding: 0, paddingTop: '1rem' }}>{data}</span>
            )}
        </div>
    );
}

/**
 * Get node group
 *
 * @param graph current graph state instance
 * @param id node id
 * @param isLatent whether the node is latent
 */
export function getNodeGroup(graph: SimulationGraph, id: string, isLatent?: boolean): NodeGroup {
    let group: NodeGroup = 'other';
    if (isLatent) {
        group = 'latent';
    } else if (graph.inDegree(id) > 0 && graph.outDegree(id) === 0) {
        group = 'target';
    }

    return group;
}
