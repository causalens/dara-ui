import { SimulationGraph, SimulationNode } from '@types';
import { Dag, DagNode, SimplexOperator } from 'd3-dag';

import { DagNodeData } from '../parsers';
import { GraphTiers } from './common';

/**
 * Based on a node attribute checks if the path is in the attribute or in extras, if not found returns undefined
 * @param attributes node object or a sub attribute of the node object
 * @param path path to the attribute
 *  */
export function getPathInNodeAttribute(attributes: Record<string, any>, path: string): any {
    let searchablePath = path;
    // If attribute becomes undefined we have a non valid path within the node
    if (attributes === undefined) {
        throw new Error('Could not find path for rank or group within Node');
    }
    // If path is in meta change it to originalMeta
    if (searchablePath === 'meta') {
        searchablePath = 'originalMeta';
    }
    // Check if path is in node attributes
    if (Object.prototype.hasOwnProperty.call(attributes, searchablePath)) {
        return attributes[searchablePath];
    }
    // If not check if it has been moved to extras
    if (attributes?.extras && searchablePath in attributes.extras) {
        return attributes.extras[searchablePath];
    }
    // If not found the node does not have that attribute
    return undefined;
}

/**
 * Gets nodes grouped by a given attribute
 * @param nodes nodes to be grouped
 * @param group the attribute to group by
 * @param graph the graph
 *  */
function getNodeGroups(nodes: string[], group: string, graph: SimulationGraph): Record<string, string[]> {
    const attributePathArray = group.split('.');

    return nodes.reduce((groupAccumulator: Record<string, string[]>, node) => {
        const nodeAttributes = graph.getNodeAttributes(node);
        // The node attribute containing the group can be deep within the node, e.g. meta.rendering_properties.group
        // or anywhere else defined by the user. Here we tranverse the path checking what the group value is.
        const nodeGroup = attributePathArray.reduce(getPathInNodeAttribute, nodeAttributes);

        // If it is not undefined at this point i.e. node group was found
        if (nodeGroup !== undefined) {
            const groupKey = String(nodeGroup);
            // if group is not in tieredNodes add it, if it is add node to that tier
            if (groupKey in groupAccumulator) {
                groupAccumulator[groupKey].push(node);
            } else {
                groupAccumulator[groupKey] = [node];
            }
        }
        return groupAccumulator;
    }, {});
}

export function getTiersArray(
    tiers: GraphTiers,
    graph: SimulationGraph,
    dagGraph: Dag<DagNode<DagNodeData>>
): SimplexOperator<DagNode>;

export function getTiersArray(tiers: GraphTiers, graph: SimulationGraph, dagGraph: undefined): string[][];

/**
 * Gets an array of array of nodes following the defined tiers
 * @param tiers the tiers defined by the layout
 * @param nodes a list of nodes attributes
 */
export function getTiersArray(
    tiers: GraphTiers,
    graph: SimulationGraph,
    dagGraph?: Dag<DagNode<DagNodeData>>
): SimplexOperator<DagNode> | string[][] {
    const nodes = graph.nodes();
    let tiersArray: string[][] = Array.isArray(tiers) ? tiers : [];

    if (!Array.isArray(tiers)) {
        // must be of type TiersConfig
        const { group, rank } = tiers;
        const tieredNodes = getNodeGroups(nodes, group, graph);

        // if rank is defined use it to order the tiers
        if (rank) {
            const missingGroups: string[] = [];
            tiersArray = rank.map((key) => {
                if (!(key in tieredNodes)) {
                    missingGroups.push(key);
                    return [];
                }
                return tieredNodes[key];
            });

            if (missingGroups.length > 0) {
                throw new Error(`Group(s) ${missingGroups.join(', ')} defined in rank not found within any Nodes`);
            }
        } else {
            tiersArray = Object.values(tieredNodes);
        }
    }
    if (dagGraph) {
        const tiersArraySimulationNode = tiersArray.map((tier) => tier.map((node) => graph.getNodeAttributes(node)));
        const allNodes = dagGraph.descendants();
        const nodeMap = new Map<string, DagNode<DagNodeData>>();
        allNodes.forEach((node) => {
            nodeMap.set(node.data.id, node);
        });
        // Define the simplexOperator as a function
        const simplexOperator = ((): DagNode[][] => {
            const tiersDagNodes: DagNode[][] = [];

            for (const tier of tiersArraySimulationNode) {
                const dagNodesTier = tier
                    .map((simNode) => nodeMap.get(simNode.id))
                    .filter((node) => node !== undefined) as DagNode[];
                tiersDagNodes.push(dagNodesTier);
            }

            return tiersDagNodes;
        }) as unknown as SimplexOperator<DagNode>;

        // Attach the rank method
        simplexOperator.rank = (): any => {
            // Do nothing
            return simplexOperator; // Return the operator for method chaining
        };

        // Attach the debug method
        simplexOperator.debug = (): any => {
            // Do nothing
            return simplexOperator; // Return the operator for method chaining
        };

        return simplexOperator;
    }
    return tiersArray;
}
