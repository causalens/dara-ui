import { Meta } from '@storybook/react';

import { Item } from '../types';
import { default as CategoricalFilterComponent, CategoricalFilterProps } from './categorical-filter';
import { default as DatetimeFilterComponent, DatetimeFilterProps } from './datetime-filter';
import { default as NumericFilterComponent, NumericFilterProps } from './numeric-filter';

export default {
    component: CategoricalFilterComponent,
    title: 'UI Components/Filters',
} as Meta;

const simpleItems: Item[] = [
    {
        label: 'One',
        value: 1,
    },
    {
        label: 'Two',
        value: 2,
    },
    {
        label: 'Three',
        value: 3,
    },
    {
        label: 'Four',
        value: 4,
    },
    {
        label: 'Five',
        value: 5,
    },
];

export const CategoricalFilter = (props: CategoricalFilterProps): JSX.Element => (
    <CategoricalFilterComponent {...props} />
);
CategoricalFilter.args = {
    items: simpleItems,
};

export const NumericFilter = (props: NumericFilterProps): JSX.Element => <NumericFilterComponent {...props} />;

export const DatetimeFilter = (props: DatetimeFilterProps): JSX.Element => <DatetimeFilterComponent {...props} />;
DatetimeFilter.args = {
    showTimeInput: true,
};
