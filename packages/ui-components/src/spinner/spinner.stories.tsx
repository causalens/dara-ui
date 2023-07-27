/**
* Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
*
* Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
*
* As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
* use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
*/
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
