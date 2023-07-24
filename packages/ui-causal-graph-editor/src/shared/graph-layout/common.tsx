import { LayoutMapping, XYPosition } from 'graphology-layout/utils';

import { SimulationGraph } from '../../types';

export abstract class GraphLayoutBuilder<T> {
    _nodeSize = 64;

    _nodeFontSize = 16;

    /**
     * Sets node size and returns the builder
     *
     * @param size node size
     */
    nodeSize(size: number): this {
        this._nodeSize = size;
        return this;
    }

    /**
     * Sets node font size and returns the builder
     *
     * @param size node font size
     */
    nodeFontSize(size: number): this {
        this._nodeFontSize = size;
        return this;
    }

    abstract build(): T;
}

/**
 * Defines necessary properties that need to be implemented by graph layouts
 */
export abstract class GraphLayout {
    nodeSize: number;

    nodeFontSize: number;

    constructor(builder: GraphLayoutBuilder<unknown>) {
        this.nodeSize = builder._nodeSize;
        this.nodeFontSize = builder._nodeFontSize;
    }

    // eslint-disable-next-line class-methods-use-this
    get supportsDrag(): boolean {
        return true;
    }

    // eslint-disable-next-line class-methods-use-this
    get requiresPosition(): boolean {
        return true;
    }

    /**
     * Apply a layout to a given graph data.
     *
     * Returns a computed layout.
     *
     * @param graphData graph data to apply the layout to
     * @param forceUpdate callback to call to update the layout
     */
    abstract applyLayout(
        graph: SimulationGraph,
        forceUpdate?: (layout: LayoutMapping<XYPosition>, edgePoints?: LayoutMapping<XYPosition[]>) => void
    ): Promise<{
        edgePoints?: LayoutMapping<XYPosition[]>;
        layout: LayoutMapping<XYPosition>;
        onAddEdge?: () => void | Promise<void>;
        onAddNode?: () => void | Promise<void>;
        onCleanup?: () => void | Promise<void>;
        onEndDrag?: () => void | Promise<void>;
        onMove?: (nodeId: string, x: number, y: number) => void | Promise<void>;
        onStartDrag?: () => void | Promise<void>;
    }>;
}
