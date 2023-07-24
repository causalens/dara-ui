import { Meta } from '@storybook/react';

import { Cow, Hippo } from '@darajs/ui-icons';

import { default as SwitchComponent, SwitchProps } from './switch';

export default {
    component: SwitchComponent,
    title: 'UI Components/Switch',
} as Meta;

export const TextLabelsScenario = (args: SwitchProps): JSX.Element => <SwitchComponent {...args} />;

// test containing text
TextLabelsScenario.args = { initialValue: true, labels: { off: 'OFF', on: 'ON' } };

export const IconLabelsScenario = (args: SwitchProps): JSX.Element => <SwitchComponent {...args} />;

// test containing icons
IconLabelsScenario.args = { initialValue: true, labels: { off: <Hippo />, on: <Cow size="lg" /> } };

export const LightDarkScenario = (args: SwitchProps): JSX.Element => <SwitchComponent {...args} />;

// test containing icons
LightDarkScenario.args = { initialValue: true, lightDark: true };
