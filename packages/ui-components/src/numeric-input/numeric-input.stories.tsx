/**
 * Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
 *
 * Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
 *
 * As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
 * use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
 */
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
