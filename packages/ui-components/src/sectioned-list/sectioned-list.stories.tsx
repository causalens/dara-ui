import { Meta } from '@storybook/react';

import { ListItem, default as SectionedListComponent, SectionedListProps } from './sectioned-list';

export default {
    component: SectionedListComponent,
    title: 'UI Components/Sectioned List',
} as Meta;

export const SectionedList = (args: SectionedListProps): JSX.Element => (
    <div style={{ width: '50%' }}>
        <SectionedListComponent {...args} />
    </div>
);

const sampleListItems = (header: string): Array<ListItem> => [
    {
        heading: false,
        label: `${header} item 1`,
        value: `${header} value 1`,
    },
    {
        heading: false,
        label: `${header} item 2`,
        value: `${header} value 2`,
    },
    {
        heading: false,
        label: `${header} item 3`,
        value: `${header} value 3`,
    },
];

const sampleListSections = [
    { items: sampleListItems('1'), label: 'Section 1' },
    { items: sampleListItems('2'), label: 'Section 2' },
    { items: sampleListItems('3'), label: 'Section 3' },
];

SectionedList.args = {
    items: sampleListSections,
};
