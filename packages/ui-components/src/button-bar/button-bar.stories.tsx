import { Meta } from '@storybook/react';

import { Item } from '../types';
import { default as ButtonBarComponent, ButtonProps } from './button-bar';

export default {
    component: ButtonBarComponent,
    title: 'UI Components/Button Bar',
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

export const ButtonBar = (args: ButtonProps): JSX.Element => <ButtonBarComponent {...args} />;
ButtonBar.args = {
    disabled: false,
    initialValue: {
        label: 'One',
        value: 1,
    },
    items: simpleItems,
};
