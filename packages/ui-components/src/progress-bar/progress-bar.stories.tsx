/**
 * Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
 *
 * Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
 *
 * As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
 * use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
 */
import { Meta } from '@storybook/react';

import { default as ProgressBarComponent, ProgressBarProps } from './progress-bar';

export default {
    component: ProgressBarComponent,
    title: 'UI Components/Progress Bar',
} as Meta;

export const ProgressBar = (args: ProgressBarProps): JSX.Element => <ProgressBarComponent {...args} />;
ProgressBar.args = {
    progress: 33,
    small: false,
};

// Now that we have multi as well, could we have two stories one for multi and one for single bars?

export const ProgressBarMulti = (args: ProgressBarProps): JSX.Element => <ProgressBarComponent {...args} />;
ProgressBarMulti.args = {
    label: ['Available', 'Used', 'Limit', 'Total'],
    progress: [10, 5, 30, 80],
    small: false,
};
