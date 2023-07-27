/**
* Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
*
* Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
*
* As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
* use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
*/
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
