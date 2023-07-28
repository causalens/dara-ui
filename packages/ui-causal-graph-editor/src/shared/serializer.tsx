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
import {
    CausalGraph,
    CausalGraphEdge,
    CausalGraphNode,
    EdgeRenderingMeta,
    FlatEdgeRenderingMeta,
    FlatNodeRenderingMeta,
    GraphState,
    NodeRenderingMeta,
    SimulationEdge,
    SimulationNode,
} from '../types';

const RENDERING_META_PREFIX = 'meta.rendering_properties.';

function isPrefixed<T extends string>(key: string): key is T {
    return key.startsWith(RENDERING_META_PREFIX);
}

function removeEdgePrefix<T extends keyof FlatEdgeRenderingMeta>(key: T): keyof EdgeRenderingMeta {
    return key.slice(RENDERING_META_PREFIX.length) as keyof EdgeRenderingMeta;
}

function removeNodePrefix<T extends keyof FlatNodeRenderingMeta>(key: T): keyof NodeRenderingMeta {
    return key.slice(RENDERING_META_PREFIX.length) as keyof NodeRenderingMeta;
}

/**
 * Serialize a simulation edge into a causal graph edge
 *
 * @param attributes simulation edge data
 * @param source optional source to include in output data
 * @param destination optional destination to include in output data
 */
export function serializeGraphEdge(attributes: SimulationEdge, source?: string, destination?: string): CausalGraphEdge {
    const entries = Object.entries(attributes) as Entries<SimulationEdge>;
    const unflattenedMeta: EdgeRenderingMeta = Object.fromEntries(
        entries
            .filter(([key]) => isPrefixed<keyof FlatEdgeRenderingMeta>(key))
            .map(([key, val]) => {
                const newKey = removeEdgePrefix(key as keyof FlatEdgeRenderingMeta);
                return [newKey, val];
            })
    );

    const output: CausalGraphEdge = {
        edge_type: attributes.edge_type,
        meta: {
            ...attributes.originalMeta,
            rendering_properties: unflattenedMeta,
        },
    };

    if (source) {
        output.source = source;
    }

    if (destination) {
        output.destination = destination;
    }

    return output;
}

/**
 * Serialize a simulation node into a causal graph node
 *
 * @param attributes simulation node data
 * @param includeIdentifier whether to include data to identify the node
 */
export function serializeGraphNode(attributes: SimulationNode, includeIdentifier = false): CausalGraphNode {
    const entries = Object.entries(attributes) as Entries<SimulationNode>;
    const unflattenedMeta: NodeRenderingMeta = Object.fromEntries(
        entries
            .filter(([key]) => isPrefixed<keyof FlatNodeRenderingMeta>(key))
            .map(([key, val]) => {
                const newKey = removeNodePrefix(key as keyof FlatNodeRenderingMeta);
                return [newKey, val];
            })
    );

    const output: CausalGraphNode = {
        meta: {
            ...attributes.originalMeta,
            rendering_properties: unflattenedMeta,
        },
        variable_type: attributes.variable_type,
    };

    if (includeIdentifier) {
        output.identifier = attributes.id;
    }

    return output;
}

type Entries<T> = {
    [K in keyof T]: [K, T[K]];
}[keyof T][];

/**
 * Serialize internal graph representation into a CausalGraph
 *
 * @param graph internal graph representation
 */
export function causalGraphSerializer(state: GraphState): CausalGraph {
    const edges: CausalGraph['edges'] = state.graph.reduceEdges(
        (acc: CausalGraph['edges'], id: string, attributes: SimulationEdge, source: string, target: string) => {
            if (!(source in acc)) {
                acc[source] = {};
            }

            acc[source][target] = serializeGraphEdge(attributes);

            return acc;
        },
        {}
    );

    const nodes: CausalGraph['nodes'] = state.graph.reduceNodes(
        (acc: CausalGraph['nodes'], id: string, attributes: SimulationNode) => {
            const entries = Object.entries(attributes) as Entries<SimulationNode>;
            const unflattenedMeta: NodeRenderingMeta = Object.fromEntries(
                entries
                    .filter(([key]) => isPrefixed<keyof FlatNodeRenderingMeta>(key))
                    .map(([key, val]) => {
                        const newKey = removeNodePrefix(key as keyof FlatNodeRenderingMeta);
                        return [newKey, val];
                    })
            );

            acc[id] = {
                meta: {
                    ...attributes.originalMeta,
                    rendering_properties: unflattenedMeta,
                },
                variable_type: attributes.variable_type,
            };

            return acc;
        },
        {}
    );

    return {
        edges,
        nodes,
        version: state.graph.getAttribute('version'),
    };
}
