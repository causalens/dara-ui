import { Meta } from '@storybook/react';

import { default as AccordionComponent, AccordionProps } from './accordion';

export default {
    component: AccordionComponent,
    title: 'UI Components/Accordion',
} as Meta;

export const Accordion = (args: AccordionProps): JSX.Element => <AccordionComponent {...args} />;
Accordion.args = {
    initialOpenItems: [1],
    items: [
        {
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer metus turpis, auctor sed posuere id, dignissim ac augue. Nam tincidunt a odio quis consectetur. Etiam molestie nulla lectus, at volutpat nisi malesuada eget. Nullam eu velit vitae augue pellentesque scelerisque at a massa. Quisque sollicitudin tellus vel fermentum pulvinar.',
            label: 'First item',
        },
        {
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer metus turpis, auctor sed posuere id, dignissim ac augue. Nam tincidunt a odio quis consectetur. Etiam molestie nulla lectus, at volutpat nisi malesuada eget. Nullam eu velit vitae augue pellentesque scelerisque at a massa. Quisque sollicitudin tellus vel fermentum pulvinar.',
            label: 'Second item',
        },
        {
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer metus turpis, auctor sed posuere id, dignissim ac augue. Nam tincidunt a odio quis consectetur. Etiam molestie nulla lectus, at volutpat nisi malesuada eget. Nullam eu velit vitae augue pellentesque scelerisque at a massa. Quisque sollicitudin tellus vel fermentum pulvinar.',
            label: 'Third item',
        },
    ],
    multi: false,
};
