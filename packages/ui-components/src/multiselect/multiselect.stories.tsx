/**
 * Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
 *
 * Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
 *
 * As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
 * use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
 */
import { Meta } from '@storybook/react';

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
];

export const MultiSelect = (args: MultiSelectProps): JSX.Element => <MultiSelectComponent {...args} />;

MultiSelect.args = {
    items: sampleItems,
    maxRows: 3,
    maxWidth: '20rem',
    onTermChange: undefined,
    size: 1,
} as MultiSelectProps;
