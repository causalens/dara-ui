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
import * as d3 from 'd3';
import { Simulation, SimulationLinkDatum } from 'd3';
import { LayoutMapping, XYPosition } from 'graphology-layout/utils';
import debounce from 'lodash/debounce';

import { D3SimulationEdge, SimulationGraph, SimulationNode } from '../../types';
import { getD3Data, nodesToLayout } from '../parsers';
import { GraphLayout, GraphLayoutBuilder } from './common';

class SpringLayoutBuilder extends GraphLayoutBuilder<SpringLayout> {
    _collisionForce = 2;

    _gravity = -50;

    _linkForce = 5;

    _warmupTicks = 100;

    /**
     * Set the multiplier for collision force
     *
     * @param force force to set
     */
    collisionForce(force: number): this {
        this._collisionForce = force;
        return this;
    }

    /**
     * Set the multiplier for link force
     *
     * @param force force to set
     */
    linkForce(force: number): this {
        this._linkForce = force;
        return this;
    }

    /**
     * Set the gravity force
     *
     * @param force force to set
     */
    gravity(force: number): this {
        this._gravity = force;
        return this;
    }

    /**
     * Sets the number of ticks to run the simulation for before displaying the layout
     *
     * @param ticks number of ticks to run before display
     */
    warmupTicks(ticks: number): this {
        this._warmupTicks = ticks;
        return this;
    }

    build(): SpringLayout {
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        return new SpringLayout(this);
    }
}

/**
 * The Spring layout uses a force simulation to position nodes.
 * The layout keeps the simulation running as nodes are being dragged which produces the spring behaviour of edges.
 */
export default class SpringLayout extends GraphLayout {
    public collisionForce: number;

    public gravity: number;

    public linkForce: number;

    public warmupTicks: number;

    constructor(builder: SpringLayoutBuilder) {
        super(builder);
        this.collisionForce = builder._collisionForce;
        this.linkForce = builder._linkForce;
        this.gravity = builder._gravity;
        this.warmupTicks = builder._warmupTicks;
    }

    applyLayout(
        graph: SimulationGraph,
        forceUpdate: (layout: LayoutMapping<XYPosition>) => void
    ): Promise<{
        layout: LayoutMapping<XYPosition>;
        onAddNode?: () => void | Promise<void>;
        onCleanup?: () => void | Promise<void>;
        onEndDrag?: () => void | Promise<void>;
        onMove?: (nodeId: string, x: number, y: number) => void;
        onStartDrag?: () => void | Promise<void>;
    }> {
        // We're modifying edges/nodes
        let [edges, nodes] = getD3Data(graph);

        const simulation: Simulation<SimulationNode, D3SimulationEdge> = d3
            .forceSimulation(nodes)
            // The link force pulls linked nodes together so they try to be a given distance apart
            .force(
                'links',
                d3
                    .forceLink<SimulationNode, SimulationLinkDatum<SimulationNode>>(edges)
                    .id((d) => d.id)
                    .distance(() => this.nodeSize * this.linkForce)
            )
            // The charge force acts to push the nodes away from each other so they have space
            .force('charge', d3.forceManyBody().strength(this.gravity))
            // The collide force makes sure that the nodes never overlap with each other
            .force('collide', d3.forceCollide(this.nodeSize * this.collisionForce))
            // The center force keeps nodes in the middle of the viewport
            .force('center', d3.forceCenter())
            .stop(); // don't start just yet

        // Warm-up the simulation so the jump to the center isn't visible
        simulation.tick(this.warmupTicks);

        simulation
            .on('tick', () => {
                // On each tick, update simulation nodes
                const newNodes = nodesToLayout(simulation.nodes());

                // Force an update
                forceUpdate(newNodes);
            })
            .restart();

        const onAddNode = debounce(() => {
            [edges, nodes] = getD3Data(graph);

            // replace nodes, re-add link force
            simulation
                .nodes(nodes)
                .force(
                    'links',
                    d3
                        .forceLink<SimulationNode, SimulationLinkDatum<SimulationNode>>(edges)
                        .id((d) => d.id)
                        .distance(() => this.nodeSize * this.linkForce)
                )
                .alpha(0.8)
                .alphaTarget(0)
                .restart();
        }, 100);

        return Promise.resolve({
            layout: nodesToLayout(simulation.nodes()),
            onAddNode,
            onCleanup: () => {
                simulation.stop();
            },
            onEndDrag: () => {
                // let simulation run for a little bit after dragging finished
                simulation.alpha(0.1).alphaTarget(0);
            },
            onMove: (nodeId: string, x: number, y: number) => {
                const nodeIdx = nodes.findIndex((n) => n.id === nodeId);
                nodes[nodeIdx].x = x;
                nodes[nodeIdx].y = y;
            },
            onStartDrag: () => {
                // target is higher than alpha so that the simulation will continue to run
                // as long as we're dragging
                simulation.alpha(0.3).alphaTarget(0.4).restart();
            },
        });
    }

    static get Builder(): SpringLayoutBuilder {
        return new SpringLayoutBuilder();
    }
}
