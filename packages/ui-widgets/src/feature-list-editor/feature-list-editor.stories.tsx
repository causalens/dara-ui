/**
* Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
*
* Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
*
* As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
* use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
*/
import { Meta } from '@storybook/react';

import { default as FeatureListEditorComponent, FeatureListEditorProps } from './feature-list-editor';

export default {
    component: FeatureListEditorComponent,
    title: 'UI Widgets/FeatureListEditor',
} as Meta;

export const FeatureListEditor = (args: FeatureListEditorProps): JSX.Element => (
    <FeatureListEditorComponent {...args} />
);

const availableOperations = [
    'value',
    'diff',
    'return',
    'lag',
    'time_lag',
    'clip',
    'tanh',
    'sigmoid',
    'scale',
    'stdfilter',
    'winsorization',
    'ma',
    'median',
    'percentile',
    'min',
    'max',
    'min_dev',
    'max_dev',
    'stdev',
    'zscore',
    'ewma',
    't_ewma',
    'ewmstd',
    'ewmzscore',
    't_ewmzscore',
    'ewm_quantized_zscore',
    'power_scaling',
    'hotencode',
    'ewma_categorical_encode',
    'time',
    'holidays',
    'holidays_encode',
    'trig_time',
    'extrapolate_time',
    'scaled_time',
    'constimpute',
    'meanimpute',
    'modeimpute',
    'polyimpute',
    'backimpute',
    'fwdimpute',
    'trendfwdimpute',
    'bfimpute',
    'threshold',
    'holt_winters',
    'zscore_threshold',
    'cross_section',
    'fractional_difference',
];

FeatureListEditor.args = {
    availableOperations,
    featureList: [
        {
            column: 'f_1',
            name: 'Feature 1',
            ops: [
                { n: 1, type: 'diff' },
                { mu: 2, sigma: 0.2, type: 'scale' },
            ],
        },
        {
            column: 'f_2',
            name: 'Feature 2',
            ops: [
                { n: 2, type: 'diff' },
                { mu: 3, sigma: 0.3, type: 'scale' },
            ],
        },
        {
            column: 'f_2',
            name: 'Long Feature 2',
            ops: [
                { n: 2, type: 'diff' },
                { mu: 3, sigma: 0.3, type: 'scale' },
                { k1: 1, k2: 2, k3: 3, k4: 4, mu: 3, sigma: 0.3, type: 'ft_3' },
            ],
        },
    ],
};
