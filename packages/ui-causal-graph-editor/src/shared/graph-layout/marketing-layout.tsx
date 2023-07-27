/**
* Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
*
* Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
*
* As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
* use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
*/
import * as d3 from 'd3';
import { SimulationLinkDatum } from 'd3';
import { LayoutMapping, XYPosition } from 'graphology-layout/utils';

import { SimulationGraph, SimulationNodeWithGroup } from '../../types';
import { getD3Data, nodesToLayout } from '../parsers';
import { GraphLayout, GraphLayoutBuilder } from './common';

export type TargetLocation = 'center' | 'bottom';

class MarketingLayoutBuilder extends GraphLayoutBuilder<MarketingLayout> {
    _targetLocation: TargetLocation = 'bottom';

    /**
     * Sets the target location and returns the builder
     *
     * @param location location of the target node
     */
    targetLocation(location: TargetLocation): this {
        this._targetLocation = location;
        return this;
    }

    build(): MarketingLayout {
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        return new MarketingLayout(this);
    }
}

/**
 * The Marketing layout uses a force simulation with strong forces to lay out nodes in a way
 * that works well with a low number of nodes.
 * The layout does not keep the force simulation running, instead it manually runs a number of ticks
 * whenever the layout is updated.
 */
export default class MarketingLayout extends GraphLayout {
    public targetLocation: TargetLocation = 'bottom';

    constructor(builder: MarketingLayoutBuilder) {
        super(builder);
        this.targetLocation = builder._targetLocation;
    }

    applyLayout(graph: SimulationGraph): Promise<{
        layout: LayoutMapping<XYPosition>;
    }> {
        const [edges, nodes] = getD3Data(graph);

        // Add some code in here to move the root of the graph up when there are no secondary nodes.
        const simulation = d3
            .forceSimulation(nodes)
            .alphaMin(0.001)
            // The link force pulls linked nodes together so they try to be a given distance apart
            .force(
                'link',
                d3
                    .forceLink<SimulationNodeWithGroup, SimulationLinkDatum<SimulationNodeWithGroup>>(edges)
                    .id((d) => d.id)
                    .distance(() => this.nodeSize * 3)
                    .strength(this.targetLocation === 'center' ? 0.7 : 0.1)
            )
            // The charge force acts to push the nodes away from each other so they have space
            .force('charge', d3.forceManyBody().strength(this.targetLocation === 'center' ? -1000 : -2000))
            // The y force acts to split the different groups up vertically on the graph
            .force(
                'y',
                d3
                    .forceY<SimulationNodeWithGroup>()
                    .y((node) => {
                        if (node.group === 'target') {
                            return this.nodeSize * 10;
                        }
                        if (node.group === 'latent') {
                            return this.nodeSize * 2;
                        }

                        return this.nodeSize * 6;
                    })
                    .strength(this.targetLocation === 'center' ? 0 : 0.3)
            )
            // The collide force makes sure that the nodes never overlap with each other
            .force('collide', d3.forceCollide(this.nodeSize + 10))
            // The radial force aligns all the groups to increasing circle sizes out from a central point.
            .force(
                'radial',
                d3
                    .forceRadial<SimulationNodeWithGroup>(
                        (node) => {
                            if (node.group === 'target') {
                                return 0;
                            }
                            if (node.group === 'latent') {
                                return this.nodeSize * 8;
                            }

                            return this.nodeSize * 4;
                        },
                        600,
                        400
                    )
                    .strength((node) => {
                        if (this.targetLocation === 'center') {
                            return 1;
                        }
                        return node.group === 'other' ? 0.7 : 1;
                    })
            )
            .stop();

        simulation.tick(1000);

        return Promise.resolve({ layout: nodesToLayout(simulation.nodes()) });
    }

    static get Builder(): MarketingLayoutBuilder {
        return new MarketingLayoutBuilder();
    }
}
