/**
* Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
*
* Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
*
* As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
* use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
*/
/* eslint-disable class-methods-use-this */
import { LayoutMapping, XYPosition } from 'graphology-layout/utils';

import { SimulationGraph } from '../../types';
import { GraphLayout, GraphLayoutBuilder } from './common';

class CustomLayoutBuilder extends GraphLayoutBuilder<CustomLayout> {
    build(): CustomLayout {
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        return new CustomLayout(this);
    }
}

/**
 * Custom layout.
 *
 * Currently does nothing, and passes back the current positions of nodes.
 */
export default class CustomLayout extends GraphLayout {
    applyLayout(graph: SimulationGraph): Promise<{
        layout: LayoutMapping<XYPosition>;
    }> {
        // TODO: in the future this could call a callback passed into the layout to compute a custom layout
        const layout = graph.reduceNodes((acc, node, attrs) => {
            acc[node] = {
                x: attrs['meta.rendering_properties.x'],
                y: attrs['meta.rendering_properties.y'],
            };

            return acc;
        }, {} as LayoutMapping<XYPosition>);

        return Promise.resolve({ layout });
    }

    static get Builder(): CustomLayoutBuilder {
        return new CustomLayoutBuilder();
    }
}
