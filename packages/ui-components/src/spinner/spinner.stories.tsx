import { Meta } from '@storybook/react';

import { default as SpinnerComponent, SpinnerProps } from './spinner';

export default {
    component: SpinnerComponent,
    title: 'UI Components/Spinner',
} as Meta;

export const Spinner = (args: SpinnerProps): JSX.Element => (
    <div style={{ height: '100%' }}>
        <SpinnerComponent {...args} />
    </div>
);
Spinner.args = { size: '1rem' };

export const SpinnerWithText = (args: SpinnerProps): JSX.Element => (
    <div style={{ height: '100%' }}>
        <SpinnerComponent {...args} />
    </div>
);
SpinnerWithText.args = { showText: true };
