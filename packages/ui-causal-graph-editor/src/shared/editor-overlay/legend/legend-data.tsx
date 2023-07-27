/**
* Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
*
* Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
*
* As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
* use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
*/
import { DefaultTheme } from '@darajs/styled-components';

import { EditorMode } from '@types';

export interface LegendLineDefinition {
    /** Arrow to show at end of line */
    arrowType?: 'none' | 'normal' | 'filled' | 'empty';
    /** Symbol to show in the center of the arrow */
    centerSymbol?: 'none' | 'cross' | 'question' | 'bidirected';
    /** color to represent */
    color?: keyof DefaultTheme['colors'];
    /** dashArray SVG path property - line will be dashed if specified */
    dashArray?: string;
    /** legend label */
    label?: string;
    /** Show empty spot instead of a legend line */
    spacer?: boolean;
}

const RESOLVER_LEGEND: LegendLineDefinition[] = [
    {
        centerSymbol: 'question',
        dashArray: '10 6',
        label: 'Unresolved',
    },
    {
        dashArray: '10 6',
        label: 'Not accepted',
    },
    {
        dashArray: '6 4',
        label: 'Accepted',
    },
    {
        label: 'Domain knowledge',
    },
];

const PAG_LEGEND: LegendLineDefinition[] = [
    { arrowType: 'filled', label: 'Directed' },
    { arrowType: 'empty', label: 'Wildcard' },
    { arrowType: 'none', label: 'Undirected' },
];

const ENCODER_LEGEND: LegendLineDefinition[] = [
    { label: 'Directed' },
    { arrowType: 'none', centerSymbol: 'bidirected', label: 'Undirected' },
    { arrowType: 'none', centerSymbol: 'cross', label: 'Prohibited' },
];

const DEFAULT_LEGENDS: Map<EditorMode, LegendLineDefinition[]> = new Map([
    [EditorMode.DEFAULT, []],
    [EditorMode.PAG_VIEWER, PAG_LEGEND],
    [EditorMode.RESOLVER, RESOLVER_LEGEND],
    [EditorMode.EDGE_ENCODER, ENCODER_LEGEND],
]);

export function getLegendData(
    editorMode: EditorMode,
    additionalLegend: LegendLineDefinition[]
): LegendLineDefinition[] {
    const modeData = DEFAULT_LEGENDS.get(editorMode) ?? [];

    return [...modeData, ...(additionalLegend ?? []).filter(Boolean)];
}
