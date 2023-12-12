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
import cytoscape, { ElementDefinition, NodeSingular } from 'cytoscape';
import fcose, { FcoseLayoutOptions, FcoseRelativePlacementConstraint } from 'cytoscape-fcose';
import { LayoutMapping, XYPosition } from 'graphology-layout/utils';

import { SimulationGraph } from '../../types';
import { DirectionType, GraphLayout, GraphLayoutBuilder, GraphTiers, TieredGraphLayoutBuilder } from './common';

cytoscape.use(fcose);

class FcoseLayoutBuilder extends GraphLayoutBuilder<FcoseLayout> implements TieredGraphLayoutBuilder {
    _edgeElasticity = 0.45;

    _edgeLength = 3;

    _energy = 0.1;

    _gravity = 35;

    _gravityRange = 80;

    _highQuality = true;

    _iterations = 2500;

    _nodeRepulsion = 6500;

    _nodeSeparation = 75;

    _tierSeparation = 200;

    orientation: DirectionType;

    tiers: GraphTiers;

    /**
     * Set edge elasticity
     *
     * @param elasticity elasticity parameter
     */
    edgeElasticity(elasticity: number): this {
        this._edgeElasticity = elasticity;
        return this;
    }

    /**
     * Set ideal edge length multiplier
     *
     * @param lengthMultiplier length multiplier
     */
    edgeLength(lengthMultiplier: number): this {
        this._edgeLength = lengthMultiplier;
        return this;
    }

    /**
     * Set initial energy on incremental recomputation
     *
     * @param energy energy
     */
    energy(energy: number): this {
        this._energy = energy;
        return this;
    }

    /**
     * Set gravity strength
     *
     * @param gravity gravity
     */
    gravity(gravity: number): this {
        this._gravity = gravity;
        return this;
    }

    /**
     * Set gravity range
     *
     * @param gravityRange
     */
    gravityRange(gravityRange: number): this {
        this._gravityRange = gravityRange;
        return this;
    }

    /**
     * Toggle high quality mode ('proof' vs 'default')
     *
     * @param highQuality whether to use high quality
     */
    highQuality(highQuality: boolean): this {
        this._highQuality = highQuality;
        return this;
    }

    /**
     * Set number of iterations to run for
     *
     * @param iters number of iterations to run for
     */
    iterations(iters: number): this {
        this._iterations = iters;
        return this;
    }

    /**
     * Set node repulsion strength
     *
     * @param repulsion repulsion to set
     */
    nodeRepulsion(repulsion: number): this {
        this._nodeRepulsion = repulsion;
        return this;
    }

    /**
     * Set node separation multiplier
     *
     * @param separation separation
     */
    nodeSeparation(separation: number): this {
        this._nodeSeparation = separation;
        return this;
    }

    /**
     * Set tier separation
     *
     * @param separation separation
     */
    tierSeparation(separation: number): this {
        this._tierSeparation = separation;
        return this;
    }

    build(): FcoseLayout {
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        return new FcoseLayout(this);
    }
}

/**
 * Based on a node attribute checks if the path is in the attribute or in extras, if not found returns undefined
 * @param path path to the attribute
 * @param attributes node object or a sub attribute of the node object
 *  */
function getPathInNodeAttribute(path: string, attributes: any): any {
    let searchablePath = path;
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
 * Gets relative placements for tiered fcose layout when tiers are given as string[][]. Defines so that given nodes within a tier are placed
 * right/left or top/bottom of each other. Following the defined hierarchy of tiers.
 * @param tiers node tiers defined by the user
 * @param orientation the orientation of the graph
 * @param tierSeparation tier separation
 *  */
function getRelativeTieredArrayPlacement(
    tiers: string[][],
    orientation: DirectionType,
    tierSeparation: number
): FcoseRelativePlacementConstraint[] {
    const relativePlacements: FcoseRelativePlacementConstraint[] = [];
    tiers?.forEach((tier, tierIndex) => {
        if (tierIndex !== tiers.length - 1) {
            if (orientation === 'horizontal') {
                const left = tier[0];
                const right = tiers[tierIndex + 1][0];
                relativePlacements.push({ gap: tierSeparation, left, right });
            }
            if (orientation === 'vertical') {
                const top = tier[0];
                const bottom = tiers[tierIndex + 1][0];
                relativePlacements.push({ bottom, gap: tierSeparation, top });
            }
        }
    });

    return relativePlacements;
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
        const nodeGroup = attributePathArray.reduce((attributeAccumulator, path) => {
            return getPathInNodeAttribute(path, attributeAccumulator);
        }, nodeAttributes);

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

interface tiersProperties {
    alignmentConstraint?: string[][];
    relativePlacementConstraint?: FcoseRelativePlacementConstraint[];
}

/**
 * Get properties values for tiered fcose layout
 * @param tiers node tiers defined by the user
 * @param orientation the orientation of the graph
 * @param tierSeparation tier separation
 *  */
function getTieredLayoutProperties(
    graph: SimulationGraph,
    tiers: GraphTiers,
    orientation: DirectionType,
    tierSeparation: number
): tiersProperties {
    let tiersArray: string[][] = Array.isArray(tiers) ? tiers : [];

    if (!Array.isArray(tiers)) {
        // must be of type TiersConfig
        const { group, rank } = tiers;
        const nodes = graph.nodes();
        const tieredNodes = getNodeGroups(nodes, group, graph);

        console.log('tieredNodes', tieredNodes);

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
                throw new Error(`Groups ${missingGroups.join(', ')} defined in rank not found within any Nodes`);
            }
        } else {
            tiersArray = Object.values(tieredNodes);
        }
    }

    console.log('tiersArray', tiersArray);

    return {
        alignmentConstraint: tiersArray,
        relativePlacementConstraint: getRelativeTieredArrayPlacement(tiersArray, orientation, tierSeparation),
    };
}

export default class FcoseLayout extends GraphLayout {
    public edgeElasticity: number;

    public edgeLength: number;

    public energy: number;

    public gravity: number;

    public gravityRange: number;

    public highQuality: boolean;

    public iterations: number;

    public nodeRepulsion: number;

    public nodeSeparation: number;

    public tierSeparation: number;

    public orientation: DirectionType;

    public tiers: GraphTiers;

    constructor(builder: FcoseLayoutBuilder) {
        super(builder);
        this.edgeElasticity = builder._edgeElasticity;
        this.edgeLength = builder._edgeLength;
        this.energy = builder._energy;
        this.gravity = builder._gravity;
        this.gravityRange = builder._gravityRange;
        this.highQuality = builder._highQuality;
        this.iterations = builder._iterations;
        this.nodeRepulsion = builder._nodeRepulsion;
        this.nodeSeparation = builder._nodeSeparation;
        this.tierSeparation = builder._tierSeparation;
        this.orientation = builder.orientation;
        this.tiers = builder.tiers;
    }

    // eslint-disable-next-line class-methods-use-this
    get requiresPosition(): boolean {
        return false;
    }

    applyLayout(graph: SimulationGraph): Promise<{
        layout: LayoutMapping<XYPosition>;
    }> {
        return new Promise((resolve) => {
            const hasPositions = graph.getNodeAttribute(graph.nodes()[0], 'x');
            const size = graph.getAttribute('size');
            const tiersPlacement = getTieredLayoutProperties(graph, this.tiers, this.orientation, this.tierSeparation);

            const elements = [
                ...graph.mapNodes<ElementDefinition>((id, attrs) => ({
                    data: { ...attrs, height: size, width: size },
                    group: 'nodes',
                    position: { x: attrs.x, y: attrs.y },
                })),
                ...graph.mapEdges<ElementDefinition>((id, attrs, source, target) => ({
                    data: { ...attrs, source, target },
                    group: 'edges',
                })),
            ];

            cytoscape({
                elements,
                headless: true,
                layout: {
                    alignmentConstraint: {
                        horizontal: this.orientation === 'vertical' ? tiersPlacement.alignmentConstraint : undefined,
                        vertical: this.orientation === 'horizontal' ? tiersPlacement.alignmentConstraint : undefined,
                    },
                    animate: false,
                    edgeElasticity: this.edgeElasticity,
                    gravity: this.gravity,
                    gravityRange: this.gravityRange,
                    idealEdgeLength: size * this.edgeLength,
                    initialEnergyOnIncremental: this.energy,
                    name: 'fcose',

                    nodeRepulsion: this.nodeRepulsion,

                    nodeSeparation: this.nodeSeparation,

                    numIters: this.iterations,
                    quality: this.highQuality ? 'proof' : 'default',

                    // only randomize if there are no position in graph yet
                    randomize: !hasPositions,

                    relativePlacementConstraint: tiersPlacement.relativePlacementConstraint,

                    stop: (ev) => {
                        const positions: LayoutMapping<XYPosition> = Object.fromEntries(
                            ev.cy.elements('node').map((node: NodeSingular) => {
                                return [node.id(), node.position()];
                            })
                        );
                        resolve({ layout: positions });
                    },
                    uniformNodeDimensions: true,
                } as FcoseLayoutOptions,
                // use internal cytoscape styling to make the layout account for node sizes
                style: [
                    {
                        selector: 'node',
                        style: {
                            height: size * 2,
                            shape: 'ellipse',
                            width: size * 2,
                        },
                    },
                ],
                styleEnabled: true,
            });
        });
    }

    static get Builder(): FcoseLayoutBuilder {
        return new FcoseLayoutBuilder();
    }
}
