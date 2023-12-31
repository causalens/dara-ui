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
import { DagNode, coordQuad, sugiyama } from 'd3-dag';
import { LayoutMapping, XYPosition } from 'graphology-layout/utils';

import { SimulationGraph } from '../../types';
import { DagNodeData, dagGraphParser } from '../parsers';
import { DirectionType, GraphLayout, GraphLayoutBuilder } from './common';

class PlanarLayoutBuilder extends GraphLayoutBuilder<PlanarLayout> {
    _orientation: DirectionType = 'horizontal';

    /**
     * Sets the nodes orientation
     *
     * @param direction vertical or horizontal
     */
    orientation(direction: DirectionType): this {
        this._orientation = direction;
        return this;
    }

    build(): PlanarLayout {
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        return new PlanarLayout(this);
    }
}

/**
 * The Planar layout utilises the sugiyama algorithm to lay out nodes in a way that minimises
 * edge crossings.
 */
export default class PlanarLayout extends GraphLayout {
    public orientation: DirectionType = 'horizontal';

    constructor(builder: PlanarLayoutBuilder) {
        super(builder);
        this.orientation = builder._orientation;
    }

    // eslint-disable-next-line class-methods-use-this
    get supportsDrag(): boolean {
        return false;
    }

    applyLayout(
        graph: SimulationGraph,
        forceUpdate?: (layout: LayoutMapping<XYPosition>, edgePoints: LayoutMapping<XYPosition[]>) => void
    ): Promise<{
        edgePoints?: LayoutMapping<XYPosition[]>;
        layout: LayoutMapping<XYPosition>;
        onAddEdge?: () => void | Promise<void>;
        onAddNode?: () => void | Promise<void>;
    }> {
        // define an inner method so it can be called repeatedly when nodes or edges are added
        const computeLayout = (
            currentGraph: SimulationGraph
        ): {
            edgePoints: LayoutMapping<XYPosition[]>;
            newLayout: LayoutMapping<XYPosition>;
            onAddNode?: () => void | Promise<void>;
        } => {
            const dag = dagGraphParser(currentGraph);

            /**
             * The nodeSize is scaled for consistent spacing in the horizontal layout
             */
            const newDagLayout = sugiyama<DagNode<DagNodeData>>()
                .nodeSize(() => [this.nodeSize * 3, this.nodeSize * 6])
                .coord(coordQuad() as any)(dag);

            const edgePoints = newDagLayout.dag.links().reduce((acc, link) => {
                acc[`${link.source.id}||${link.target.id}`] = link.points.map((point) => ({
                    x: this.orientation === 'vertical' ? point.x : point.y,
                    y: this.orientation === 'vertical' ? point.y : point.x,
                }));
                return acc;
            }, {} as LayoutMapping<XYPosition[]>);

            const newLayout = newDagLayout.dag.descendants().reduce((acc, node) => {
                acc[node.id] = {
                    x: this.orientation === 'vertical' ? node.x : node.y,
                    y: this.orientation === 'vertical' ? node.y : node.x,
                };
                return acc;
            }, {} as LayoutMapping<XYPosition>);

            return { edgePoints, newLayout };
        };

        const { newLayout, edgePoints } = computeLayout(graph);

        const recomputeLayout = (): void => {
            const { newLayout: recomputedLayout, edgePoints: recomputedPoints } = computeLayout(graph);

            forceUpdate(recomputedLayout, recomputedPoints);
        };

        return Promise.resolve({
            edgePoints,
            layout: newLayout,
            onAddEdge: recomputeLayout,
            onAddNode: recomputeLayout,
        });
    }

    static get Builder(): PlanarLayoutBuilder {
        return new PlanarLayoutBuilder();
    }
}
