import { Meta } from '@storybook/react';

import { default as ComponentSelectListComponent, ComponentSelectListProps } from './component-select-list';

export default {
    component: ComponentSelectListComponent,
    title: 'UI Components/ComponentSelectList',
} as Meta;

const exampleItems = [
    { component: <div>Test A</div>, subtitle: 'Subtitle', title: 'Title for A' },
    { component: <div>Test B</div>, subtitle: 'Subtitle', title: 'Title for B' },
    { component: <div>Test C</div>, subtitle: 'Subtitle', title: 'Title for C' },
];

export const ComponentSelectList = (args: ComponentSelectListProps): JSX.Element => (
    <ComponentSelectListComponent {...args} />
);
ComponentSelectList.args = {
    items: exampleItems,
};
