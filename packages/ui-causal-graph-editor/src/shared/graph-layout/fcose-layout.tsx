/**
 * Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
 *
 * Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
 *
 * As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
 * use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
 */
import cytoscape, { ElementDefinition, NodeSingular } from 'cytoscape';
import fcose, { FcoseLayoutOptions } from 'cytoscape-fcose';
import { LayoutMapping, XYPosition } from 'graphology-layout/utils';

import { SimulationGraph } from '../../types';
import { GraphLayout, GraphLayoutBuilder } from './common';

cytoscape.use(fcose);

class FcoseLayoutBuilder extends GraphLayoutBuilder<FcoseLayout> {
    _edgeElasticity = 0.45;

    _edgeLength = 3;

    _energy = 0.1;

    _gravity = 35;

    _gravityRange = 80;

    _highQuality = true;

    _iterations = 2500;

    _nodeRepulsion = 6500;

    _nodeSeparation = 75;

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

    build(): FcoseLayout {
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        return new FcoseLayout(this);
    }
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
