/**
 * Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
 *
 * Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
 *
 * As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
 * use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
 */
import { Meta } from '@storybook/react';

import { default as AccordionItemComponent, AccordionItemProps } from './accordion-item';

export default {
    component: AccordionItemComponent,
    title: 'UI Components/Accordion Item',
} as Meta;

export const AccordionItem = (args: AccordionItemProps): JSX.Element => <AccordionItemComponent {...args} />;
AccordionItem.args = {
    item: {
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer metus turpis, auctor sed posuere id, dignissim ac augue. Nam tincidunt a odio quis consectetur. Etiam molestie nulla lectus, at volutpat nisi malesuada eget. Nullam eu velit vitae augue pellentesque scelerisque at a massa. Quisque sollicitudin tellus vel fermentum pulvinar. ',
        label: 'Item Header',
    },
    open: true,
};
