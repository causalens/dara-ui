import { Meta } from '@storybook/react';

import { default as InputComponent, InputProps } from './input';

export default {
    component: InputComponent,
    title: 'UI Components/Input',
} as Meta;

export const Input = (props: InputProps): JSX.Element => <InputComponent {...props} />;
Input.args = {
    placeholder: 'Placeholder...',
};
