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
import { EditorMode } from '@types';

export interface LegendNodeDefinition {
    /** defines the filled color of the node symbol */
    color?: string;
    /** defines the border color of the node symbol */
    highlight_color?: string;
}

export interface LegendArrowDefinition {
    /** Arrow to show at end of line */
    arrowType?: 'none' | 'normal' | 'filled' | 'empty' | 'soft';
    /** Symbol to show in the center of the arrow */
    centerSymbol?: 'none' | 'cross' | 'question' | 'bidirected';
    /** defines the filled color of the node symbol */
    color?: string;
    /** dashArray SVG path property - line will be dashed if specified */
    dashArray?: string;
}

/**  Union type for the 'type' property */
type GraphSymbolType = 'none' | 'edge' | 'node';

interface BaseGraphLegendDefinition {
    /** legend label */
    label?: string;
    /** legend symbol type */
    type: GraphSymbolType;
}

// Extend the base interface for each specific 'type' value
interface NoneGraphLegendDefinition extends BaseGraphLegendDefinition {
    symbol?: never;
    type: 'none'; // No symbol for 'none' type
}

export interface EdgeGraphLegendDefinition extends BaseGraphLegendDefinition {
    symbol?: LegendArrowDefinition;
    type: 'edge';
}

export interface NodeGraphLegendDefinition extends BaseGraphLegendDefinition {
    symbol?: LegendNodeDefinition;
    type: 'node';
}

export type GraphLegendDefinition = NoneGraphLegendDefinition | EdgeGraphLegendDefinition | NodeGraphLegendDefinition;

const RESOLVER_LEGEND: GraphLegendDefinition[] = [
    {
        label: 'Unresolved',
        symbol: {
            centerSymbol: 'question',
            dashArray: '10 6',
        },
        type: 'edge',
    },
    {
        label: 'Not accepted',
        symbol: {
            dashArray: '10 6',
        },
        type: 'edge',
    },
    {
        label: 'Accepted',
        symbol: {
            dashArray: '6 4',
        },
        type: 'edge',
    },
    {
        label: 'Domain knowledge',
        symbol: {},
        type: 'edge',
    },
];

const PAG_LEGEND: GraphLegendDefinition[] = [
    { label: 'Directed', symbol: { arrowType: 'filled' }, type: 'edge' },
    { label: 'Wildcard', symbol: { arrowType: 'empty' }, type: 'edge' },
    { label: 'Undirected', symbol: { arrowType: 'none' }, type: 'edge' },
];

const ENCODER_LEGEND: GraphLegendDefinition[] = [
    { label: 'Hard Directed', type: 'edge' },
    { label: 'Soft Directed', symbol: { arrowType: 'soft' }, type: 'edge' },
    { label: 'Undirected', symbol: { arrowType: 'none', centerSymbol: 'bidirected' }, type: 'edge' },
    { label: 'Prohibited', symbol: { arrowType: 'none', centerSymbol: 'cross' }, type: 'edge' },
];

const DEFAULT_LEGENDS: Map<EditorMode, GraphLegendDefinition[]> = new Map([
    [EditorMode.DEFAULT, []],
    [EditorMode.PAG_VIEWER, PAG_LEGEND],
    [EditorMode.RESOLVER, RESOLVER_LEGEND],
    [EditorMode.EDGE_ENCODER, ENCODER_LEGEND],
]);

export function getLegendData(
    editorMode: EditorMode,
    additionalLegend: GraphLegendDefinition[]
): GraphLegendDefinition[] {
    const modeData = DEFAULT_LEGENDS.get(editorMode) ?? [];

    return [...modeData, ...(additionalLegend ?? []).filter(Boolean)];
}
