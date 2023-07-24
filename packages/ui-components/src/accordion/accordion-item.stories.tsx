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
