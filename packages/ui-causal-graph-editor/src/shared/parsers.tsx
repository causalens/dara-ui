import { Dag, DagNode, dagStratify } from 'd3-dag';
import { DirectedGraph } from 'graphology';
import { LayoutMapping, XYPosition } from 'graphology-layout/utils';
import isEqual from 'lodash/isEqual';
import { generate } from 'shortid';

import {
    CausalGraph,
    CausalGraphEdge,
    CausalGraphNode,
    D3SimulationEdge,
    FlatEdgeRenderingMeta,
    FlatNodeRenderingMeta,
    SimulationAttributes,
    SimulationEdge,
    SimulationGraph,
    SimulationNode,
    SimulationNodeWithGroup,
} from '../types';
import { getNodeGroup } from './utils';

export type DagNodeData = SimulationNode & {
    parentIds: string[];
};

/**
 * This parses the graph structure into a Dag structure that the d3-dag library can understand
 *
 * @param rawData
 */
export function dagGraphParser(graph: SimulationGraph): Dag<DagNode<DagNodeData>> {
    const nodes: DagNodeData[] = graph.mapNodes((id: string, attributes: SimulationNode) => {
        const parentIds = graph.inboundNeighbors(id);

        return {
            ...attributes,
            group: 'latent',
            parentIds,
        };
    });

    return dagStratify<DagNodeData>()(nodes);
}

/**
 * Get graph edges in d3 expected format
 *
 * @param graph graph to get edges from
 */
export function getD3Data(graph: SimulationGraph): [edges: D3SimulationEdge[], nodes: SimulationNodeWithGroup[]] {
    const nodes = graph.reduceNodes(
        (acc, id, attrs) => ({
            ...acc,
            [id]: {
                ...attrs,
                group: getNodeGroup(graph, id, attrs['meta.rendering_properties.latent']),
            },
        }),
        {} as Record<string, SimulationNodeWithGroup>
    );

    const edges = graph.mapEdges((edgeKey, attrs, source, target) => {
        return {
            ...attrs,
            source: nodes[source],
            target: nodes[target],
        };
    });

    return [edges, Object.values(nodes)];
}

/**
 * Format node data in a layoutmapping format
 *
 * @param nodes
 */
export function nodesToLayout(nodes: SimulationNode[]): LayoutMapping<XYPosition> {
    return nodes.reduce((acc, node) => {
        acc[node.id] = {
            x: node.x,
            y: node.y,
        };

        return acc;
    }, {} as LayoutMapping<XYPosition>);
}

/**
 * Parse a causal graph node into a simulation node
 *
 * @param nodeKey node id
 * @param nodeData  node data
 * @param data whole graph data
 * @param availableInputs optional list of input nodes
 */
export function parseGraphNode(
    nodeKey: string,
    nodeData: CausalGraphNode,
    data: CausalGraph,
    availableInputs?: string[]
): SimulationNode {
    // Everything that's not an available input or an output is latent
    // If available inputs is not provided, nothing is latent
    const isLatent =
        availableInputs && Array.isArray(availableInputs)
            ? !availableInputs.includes(nodeKey) && Object.keys(data.edges).includes(nodeKey)
            : false;

    const originalEntries = Object.entries(nodeData.meta?.rendering_properties ?? {}) as Entries<FlatNodeRenderingMeta>;

    // flatten meta properties as graphology doesn't play nice with nested attributes
    const meta: FlatNodeRenderingMeta = Object.fromEntries(
        originalEntries.map((entry) => {
            const computedKey = `meta.rendering_properties.${entry[0]}`;

            return [computedKey, entry[1]];
        })
    );
    meta['meta.rendering_properties.latent'] ??= isLatent;

    const attributes: SimulationNode = {
        id: nodeKey,
        originalMeta: nodeData.meta,
        variable_type: nodeData.variable_type,
        // Copy over meta.x/y to use as initial positions
        x: meta['meta.rendering_properties.x'],
        y: meta['meta.rendering_properties.y'],
        ...meta,
    };

    return attributes;
}

/**
 * Parse a causal graph edge into simulation edge
 *
 * @param edgeData edge data
 */
export function parseGraphEdge(edgeData: CausalGraphEdge): SimulationEdge {
    const originalEntries = Object.entries(edgeData.meta?.rendering_properties ?? {}) as Entries<FlatEdgeRenderingMeta>;

    // flatten meta properties as graphology doesn't play nice with nested attributes
    const meta: FlatEdgeRenderingMeta = Object.fromEntries(
        originalEntries.map((entry) => {
            const computedKey = `meta.rendering_properties.${entry[0]}`;

            return [computedKey, entry[1]];
        })
    );

    const attributes: SimulationEdge = {
        edge_type: edgeData.edge_type,
        originalMeta: edgeData.meta,
        ...meta,
    };

    return attributes;
}

type Entries<T> = {
    [K in keyof T]: [K, T[K]];
}[keyof T][];

/**
 * Parses CausalGraph structure into a SimulationGraph representation
 *
 * @param data input CausalGraph structure
 * @param availableInputs names of input nodes
 */
export function causalGraphParser(
    data: CausalGraph,
    availableInputs?: string[],
    initialGraph?: SimulationGraph
): SimulationGraph {
    let resultGraph = initialGraph;

    // use graph provided or a new one
    resultGraph ??= new DirectedGraph<SimulationNode, SimulationEdge, SimulationAttributes>();

    const newNodes = Object.keys(data.nodes);

    // Remove nodes which no longer exist
    resultGraph.forEachNode((node) => {
        if (!newNodes.includes(node)) {
            resultGraph.dropNode(node);
        }
    });

    newNodes.forEach((nodeKey) => {
        const nodeData = data.nodes[nodeKey];

        const attributes = parseGraphNode(nodeKey, nodeData, data, availableInputs);

        try {
            const existingAttributes = resultGraph.getNodeAttributes(nodeKey);
            const { x, y, ...existingAttributesWithoutPosition } = existingAttributes;

            // Check if attributes changed (not x,y)
            if (!isEqual(existingAttributesWithoutPosition, attributes)) {
                // keep previous positions
                resultGraph.updateNode(nodeKey, () => ({ ...attributes, x, y }));
            }
        } catch {
            // Error - no node exists, add it first
            resultGraph.addNode(nodeKey, attributes);
        }
    });

    // Remove edges which no longer exist
    resultGraph.forEachEdge((edgeKey, edgeData, source, target) => {
        if (!data.edges?.[source]?.[target]) {
            resultGraph.dropEdge(source, target);
        }
    });

    Object.entries(data.edges).forEach(([sourceKey, sourceEdges]) => {
        Object.entries(sourceEdges).forEach(([targetKey, edgeData]) => {
            const attributes = parseGraphEdge(edgeData);

            try {
                const existingAttributes = resultGraph.getEdgeAttributes(sourceKey, targetKey);
                const { points, ...existingAttributesWithoutPoints } = existingAttributes;

                // Check if attributes changed
                if (!isEqual(existingAttributesWithoutPoints, attributes)) {
                    resultGraph.updateEdge(sourceKey, targetKey, () => ({ ...attributes, points }));
                }
            } catch {
                // Error - no edge exists, add it first
                resultGraph.addEdge(sourceKey, targetKey, attributes);
            }
        });
    });

    resultGraph.updateAttribute('version', () => data.version);
    resultGraph.updateAttribute('uid', () => generate());

    return resultGraph;
}
