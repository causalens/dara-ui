/**
 * Copyright 2023 Impulse Innovations Limited
 *
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
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
