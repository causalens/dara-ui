import { Meta } from '@storybook/react';

import { default as ButtonComponent, ButtonProps } from './button';

export default {
    component: ButtonComponent,
    title: 'UI Components/Button',
} as Meta;

export const Button = (args: ButtonProps): JSX.Element => <ButtonComponent {...args} />;
Button.args = {
    children: ['Button'],
    outline: false,
    styling: 'primary',
};
