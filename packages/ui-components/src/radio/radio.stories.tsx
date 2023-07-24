import { Meta } from '@storybook/react';

import { Item } from '../types';
import { default as RadioComponent, RadioGroupProps } from './radio-group';

export default {
    component: RadioComponent,
    title: 'UI Components/Radio Group',
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
];

export const RadioGroup = (props: RadioGroupProps): JSX.Element => <RadioComponent {...props} />;
RadioGroup.args = {
    initialValue: 1,
    items: simpleItems,
};

export const RadioGroupList = (props: RadioGroupProps): JSX.Element => <RadioComponent {...props} />;
RadioGroupList.args = {
    initialValue: 2,
    isListStyle: true,
    items: simpleItems,
};
