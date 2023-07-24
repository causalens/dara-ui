import { Meta } from '@storybook/react';

import { default as NumericInputComponent, NumericInputProps } from './numeric-input';

export default {
    component: NumericInputComponent,
    title: 'UI Components/Numeric Input',
} as Meta;

export const NumericInput = (args: NumericInputProps): JSX.Element => <NumericInputComponent {...args} />;

NumericInput.args = {
    stepper: true,
} as NumericInputProps;
