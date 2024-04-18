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
import React from 'react';

import { default as MultiSelectComponent, MultiSelectProps } from './multiselect';

export default {
    component: MultiSelectComponent,
    title: 'UI Components/Multi Select',
} as Meta;

const sampleItems = [
    {
        label: 'this is an extremely long label that may overflow',
        value: 'value 1',
    },
    {
        label: 'label 2',
        value: 'value 2',
    },
    {
        label: 'label 3',
        value: 'value 3',
    },
    {
        label: 'label 4',
        value: 'value 4',
    },
    {
        label: 'label 5',
        value: 'value 5',
    },
    {
        label: 'label 6',
        value: 'value 6',
    },
    {
        label: 'label 7',
        value: 'value 7',
    },
    {
        label: 'label 8',
        value: 'value 8',
    },
    {
        label: 'label 9',
        value: 'value 9',
    },
    {
        label: 'label 10',
        value: 'value 10',
    },
    {
        label: 'label 11',
        value: 'value 11',
    },

    {
        label: 'label 12',
        value: 'value 12',
    },
    {
        label: 'label 13',
        value: 'value 13',
    },
    {
        label: 'label 14',
        value: 'value 14',
    },
    {
        label: 'label 15',
        value: 'value 15',
    },
    {
        label: 'label 16',
        value: 'value 16',
    },
    {
        label: 'label 17',
        value: 'value 17',
    },
    {
        label: 'label 18',
        value: 'value 18',
    },
    {
        label: 'label 19',
        value: 'value 19',
    },
    {
        label: 'label 20',
        value: 'value 20',
    },
    {
        label: 'label 21',
        value: 'value 21',
    },
    {
        label: 'label 22',
        value: 'value 22',
    },
    {
        label: 'label 23',
        value: 'value 23',
    },
    {
        label: 'label 24',
        value: 'value 24',
    },
    {
        label: 'label 25',
        value: 'value 25',
    },
    {
        label: 'label 26',
        value: 'value 26',
    },
    {
        label: 'label 27',
        value: 'value 27',
    },
    {
        label: 'label 28',
        value: 'value 28',
    },
    {
        label: 'label 29',
        value: 'value 29',
    },
    {
        label: 'label 30',
        value: 'value 30',
    },
    {
        label: 'label 31',
        value: 'value 31',
    },
    {
        label: 'label 32',
        value: 'value 32',
    },
    {
        label: 'label 33',
        value: 'value 33',
    },
    {
        label: 'label 34',
        value: 'value 34',
    },
    {
        label: 'label 35',
        value: 'value 35',
    },
    {
        label: 'label 36',
        value: 'value 36',
    },
    {
        badge: null,
        image: null,
        label: 'U99842',
        value: 'U99842',
    },
    {
        badge: null,
        image: null,
        label: 'UF7986',
        value: 'UF7986',
    },
    {
        badge: null,
        image: null,
        label: 'UM4094',
        value: 'UM4094',
    },
    {
        badge: null,
        image: null,
        label: 'UT7856',
        value: 'UT7856',
    },
];

export const MultiSelect = (args: MultiSelectProps): JSX.Element => (
    <div style={{ height: '1500px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <MultiSelectComponent {...args} />
    </div>
);

MultiSelect.args = {
    items: sampleItems,
    maxRows: 3,
    maxWidth: '20rem',
    onTermChange: undefined,
    size: 1,
} as MultiSelectProps;
