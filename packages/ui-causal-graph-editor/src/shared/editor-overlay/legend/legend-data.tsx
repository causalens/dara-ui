/**
 * Copyright 2023 Impulse Innovations Limited
 *
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { DefaultTheme } from '@darajs/styled-components';

import { EditorMode } from '@types';

export interface LegendLineDefinition {
    /** Arrow to show at end of line */
    arrowType?: 'none' | 'normal' | 'filled' | 'empty' | 'soft';
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
    { label: 'Hard Directed' },
    { arrowType: 'soft', label: 'Soft Directed' },
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
