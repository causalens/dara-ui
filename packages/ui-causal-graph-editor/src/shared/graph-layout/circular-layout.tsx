import { circular } from 'graphology-layout';
import { LayoutMapping, XYPosition } from 'graphology-layout/utils';

import { SimulationGraph } from '../../types';
import { GraphLayout, GraphLayoutBuilder } from './common';

class CircularLayoutBuilder extends GraphLayoutBuilder<CircularLayout> {
    build(): CircularLayout {
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        return new CircularLayout(this);
    }
}

/**
 * Circular layout positions nodes on a circle.
 * The circle's radius scales with the size and number of nodes so that they don't collide.
 */
export default class CircularLayout extends GraphLayout {
    applyLayout(graph: SimulationGraph): Promise<{
        layout: LayoutMapping<XYPosition>;
    }> {
        const layout = circular(graph, { scale: graph.order * this.nodeSize }) as LayoutMapping<XYPosition>;

        return Promise.resolve({ layout });
    }

    static get Builder(): CircularLayoutBuilder {
        return new CircularLayoutBuilder();
    }
}
