/**
 * Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
 *
 * Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
 *
 * As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
 * use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
 */
import { Meta } from '@storybook/react';
import { useState } from 'react';

import { default as NodeHierarchyBuilderComponent, NodeHierarchyBuilderProps } from './node-hierarchy-builder';

export default {
    component: NodeHierarchyBuilderComponent,
    title: 'CausalGraphEditor/Node Hierarchy Builder',
} as Meta;

const Template = (args: NodeHierarchyBuilderProps<any>): JSX.Element => <NodeHierarchyBuilderComponent {...args} />;

export const BaseScenario = Template.bind({});
BaseScenario.args = {
    nodes: [
        ['first long node', 'second'],
        ['third', 'fourth', 'fifth'],
        ['sixth', 'seventh', 'eighth', 'ninth'],
    ],
};

export const MetaScenario = Template.bind({});
MetaScenario.args = {
    nodeFontSize: 10,
    nodeSize: 80,
    nodes: [
        [
            { meta: { wrap_text: false }, name: 'node with no wrap' },
            { meta: { label: 'alternate label' }, name: 'second' },
        ],
        [
            { name: 'superlongwordwithnospaces' },
            { meta: { label_size: 8 }, name: 'small font' },
            { meta: { label_size: 16 }, name: 'large' },
            {
                meta: { label: 'alternate label', tooltip: 'here is a tooltip string' },
                name: 'tooltip string',
            },
            {
                meta: {
                    label: 'alternate label',
                    tooltip: {
                        key1: 'val1',
                        key2: 'val2',
                    },
                },
                name: 'tooltip object',
            },
        ],
        [{ name: 'sixth' }, { name: 'seventh' }, { name: 'eighth' }, { name: 'ninth' }],
    ],
    wrapNodeText: true,
};

function generateLayers(layers = 40): Array<string[]> {
    const nodes = [];
    let counter = 0;

    for (let i = 1; i <= layers; i++) {
        const layer = [];

        for (let j = 0; j < i; j++) {
            layer.push(counter);
            counter++;
        }

        nodes.push(layer);
    }

    return nodes;
}

export const LargeNodeNumber = Template.bind({});
LargeNodeNumber.args = {
    nodes: generateLayers(),
};

export const Scrollable = Template.bind({});
Scrollable.args = {
    nodes: Array.from({ length: 30 }, (_, i) => [`node ${i}`]),
};

export const Controlled = (args: NodeHierarchyBuilderProps<any>): JSX.Element => {
    const [nodes, setNodes] = useState(args.nodes);

    return <NodeHierarchyBuilderComponent {...args} nodes={nodes} onUpdate={setNodes} />;
};

Controlled.args = {
    nodes: Array.from({ length: 30 }, (_, i) => [`node ${i}`]),
};
