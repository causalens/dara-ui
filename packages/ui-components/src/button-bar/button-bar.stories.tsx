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
import { default as ButtonBarComponent, ButtonProps } from './button-bar';

export default {
    component: ButtonBarComponent,
    title: 'UI Components/Button Bar',
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

export const ButtonBar = (args: ButtonProps): JSX.Element => <ButtonBarComponent {...args} />;
ButtonBar.args = {
    disabled: false,
    initialValue: {
        label: 'One',
        value: 1,
    },
    items: simpleItems,
};
