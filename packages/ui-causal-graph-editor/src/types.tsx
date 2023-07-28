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
import { XYPosition } from 'graphology-layout/utils';
import AbstractGraph from 'graphology-types';

/**
 * Defines 'modes' that the viewer can run in
 */
export enum EditorMode {
    /**
     * Standard causalgraph DAG viewer mode
     */
    DEFAULT = 'DEFAULT',
    /**
     * Domain knowledge editor, input/output is a list of constraints and the graph structure serves for visualisation
     */
    EDGE_ENCODER = 'EDGE_ENCODER',
    /**
     * Like default but displays all edge types (PAG mode)
     */
    PAG_VIEWER = 'PAG',
    /**
     * Resolvera mode essentially does the job of both PAG, CAUSAL_GRAPH editors, taking in EDGE_ENCODER domain knowledge
     * Operates on a structure with additional PAG symbols, 'forced' and 'accepted' flags in meta.
     * Uses simplified UI - intended for business user
     */
    RESOLVER = 'RESOLVER',
}

/**
 * Prefix types in an object with `meta.rendering_properties`
 */
type RenderingMetaKeys<T> = {
    [K in keyof T as K extends string ? `meta.rendering_properties.${K}` : never]: T[K];
};

export interface EdgeRenderingMeta {
    accepted?: boolean;
    color?: string;
    description?: string;
    forced?: boolean;
    thickness?: number;
    tooltip?: string | Record<string, string>;
}

export type FlatEdgeRenderingMeta = RenderingMetaKeys<EdgeRenderingMeta>;

export interface NodeRenderingMeta {
    color?: string;
    highlight_color?: string;
    label?: string;
    label_color?: string;
    label_size?: number;
    latent?: boolean;
    size?: number;
    tooltip?: string | Record<string, string>;

    // Optional predefined positions
    x?: number;
    y?: number;
}

export type FlatNodeRenderingMeta = RenderingMetaKeys<NodeRenderingMeta>;

export interface CausalGraphNodeMeta {
    [key: string]: any;
    rendering_properties?: NodeRenderingMeta;
}

export interface CausalGraphEdgeMeta {
    [key: string]: any;
    rendering_properties?: EdgeRenderingMeta;
}

/** Target structure for parsers/serialisers */
export interface CausalGraph {
    edges: Record<string, Record<string, CausalGraphEdge>>;
    nodes: Record<string, CausalGraphNode>;
    version: string;
}

export interface CausalGraphNode {
    identifier?: string;
    meta: CausalGraphNodeMeta;
    variable_type: string;
}

export interface CausalGraphEdge {
    destination?: string;
    edge_type: EdgeType;
    meta: CausalGraphEdgeMeta;
    source?: string;
}

export enum VariableType {
    BINARY = 'binary',
    CONTINUOUS = 'continuous',
    MULTICLASS = 'multiclass',
    ORDINAL = 'ordinal',
    UNSPECIFIED = 'unspecified',
}

export enum EdgeType {
    /**
     * This is only used internally as a temporary representation in PAG mode, should be reversed
     * in the serialised output.
     */
    BACKWARDS_DIRECTED_EDGE = '<-',
    BIDIRECTED_EDGE = '<>',
    DIRECTED_EDGE = '->',
    UNDIRECTED_EDGE = '--',
    UNKNOWN_DIRECTED_EDGE = 'o>',
    UNKNOWN_EDGE = 'oo',
    UNKNOWN_UNDIRECTED_EDGE = 'o-',
}

export interface GraphState {
    /** Mode editor is in - set by INIT action */
    editorMode?: EditorMode;
    /** Graphology.Graph holding current state */
    graph?: SimulationGraph;
    /** Whether new nodes require a position */
    newNodesRequirePosition?: boolean;
    /** List of removed nodes that can be restored */
    restorableNodes?: SimulationNode[];
}

export type NodeGroup = 'latent' | 'target' | 'other';

export interface SimulationNode extends FlatNodeRenderingMeta {
    hovered?: boolean;
    id: string;
    originalMeta: CausalGraphNodeMeta;
    // Some layouts need the node size on the node data itself
    size?: number;

    variable_type: string;

    // Current position
    x?: number;
    y?: number;
}

/** Node data with group injected */
export type SimulationNodeWithGroup = SimulationNode & { group: NodeGroup };

export interface SimulationEdge extends FlatEdgeRenderingMeta {
    edge_type: EdgeType;
    originalMeta: CausalGraphEdgeMeta;

    // optional list of positions the edge should be curved through
    points?: XYPosition[];
}

/**
 * D3 variant of edge data, requires putting references to source and target
 */
export interface D3SimulationEdge extends SimulationEdge {
    source: SimulationNodeWithGroup;
    target: SimulationNodeWithGroup;
}

export interface SimulationAttributes {
    /**
     * Generic node size param based on layout; can be used for layout approximation
     */
    size?: number;
    uid?: string;
    version: string;
}
export type SimulationGraph = AbstractGraph<SimulationNode, SimulationEdge, SimulationAttributes>;

/**
 * Type of an edge constraint that can be encoded
 *
 * Int values from cl_interfaces.EdgeConstraint
 */
export enum EdgeConstraintType {
    DIRECTED = 2,
    /** Backward directed - unsupported */
    BACKWARD_DIRECTED = 3,
    FORBIDDEN = 4,
    UNDIRECTED = 1,
}

/**
 * Encodes domain-knowledge as edge constraint
 */
export interface EdgeConstraint {
    source: string;
    target: string;
    type: EdgeConstraintType;
}

/**
 * Internal representation of an edge constraint that includes an internal ID
 */
export interface EdgeConstraintItem extends EdgeConstraint {
    id: string;
}

export enum PagSymbol {
    ARROW = 'ARROW',
    CIRCLE = 'CIRCLE',
    EMPTY = 'EMPTY',
}

export const headSymbolMap: Record<string, PagSymbol> = {
    '-': PagSymbol.EMPTY,
    '>': PagSymbol.ARROW,
    o: PagSymbol.CIRCLE,
};

export const tailSymbolMap: Record<string, PagSymbol> = {
    '-': PagSymbol.EMPTY,
    '<': PagSymbol.ARROW,
    o: PagSymbol.CIRCLE,
};

/**
 * Parse a PAG symbol (i.e. 'ARROW') into its string representation ('>')
 */
export function symbolToString(symbol: PagSymbol, position: 'head' | 'tail'): string {
    const symbolMap = position === 'head' ? headSymbolMap : tailSymbolMap;
    for (const [key, val] of Object.entries(symbolMap)) {
        if (val === symbol) {
            return key;
        }
    }

    throw new Error(`Unrecognised symbol: ${symbol}`);
}

/**
 * Parse a PAG string ('>') into its symbol ('ARROW')
 */
export function stringToSymbol(string: string, position: 'head' | 'tail'): PagSymbol {
    const symbolMap = position === 'head' ? headSymbolMap : tailSymbolMap;

    if (symbolMap[string]) {
        return symbolMap[string];
    }

    throw new Error(`Unrecognised symbol: ${string}`);
}

/**
 * Defines minimum scale at which a given element should be rendered
 * Should be a number larger than 0 (most likely between 0-1)
 */
export interface ZoomThresholds {
    edge: number;
    label: number;
    shadow: number;
    symbol: number;
}

export type ZoomState = Record<keyof ZoomThresholds, boolean>;
