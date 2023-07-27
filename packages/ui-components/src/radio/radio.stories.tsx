/**
* Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
*
* Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
*
* As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
* use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
*/
import { Meta } from '@storybook/react';

import { Item } from '../types';
import { default as RadioComponent, RadioGroupProps } from './radio-group';

export default {
    component: RadioComponent,
    title: 'UI Components/Radio Group',
} as Meta;

const simpleItems: Item[] = [
    {
        label: 'One',
        value: 1,
    },
    {
        label: 'Two',
        value: 2,
    },
    {
        label: 'Three',
        value: 3,
    },
];

export const RadioGroup = (props: RadioGroupProps): JSX.Element => <RadioComponent {...props} />;
RadioGroup.args = {
    initialValue: 1,
    items: simpleItems,
};

export const RadioGroupList = (props: RadioGroupProps): JSX.Element => <RadioComponent {...props} />;
RadioGroupList.args = {
    initialValue: 2,
    isListStyle: true,
    items: simpleItems,
};
