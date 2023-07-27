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
import { default as CheckboxComponent, CheckboxProps } from './checkbox';
import { default as CheckboxGroupComponent, CheckboxGroupProps } from './checkbox-group';
import { default as TriStateCheckboxComponent, CheckboxProps as TriStateCheckboxProps } from './tri-state-checkbox';

export default {
    component: CheckboxComponent,
    title: 'UI Components/Checkbox',
} as Meta;

export const Checkbox = (props: CheckboxProps): JSX.Element => <CheckboxComponent {...props} />;
Checkbox.args = {
    intialValue: true,
    label: 'Test',
};

export const ListCheckbox = (props: CheckboxProps): JSX.Element => <CheckboxComponent {...props} />;
ListCheckbox.args = {
    isListStyle: true,
    label: 'Test',
    selected: false,
};

export const TriStateCheckbox = (props: TriStateCheckboxProps): JSX.Element => <TriStateCheckboxComponent {...props} />;
TriStateCheckbox.args = {
    allSelected: false,
    noneSelected: false,
};

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
    {
        label: 'Four',
        value: 4,
    },
    {
        label: 'Five',
        value: 5,
    },
];

const val: Item[] = [
    {
        label: 'Two',
        value: 2,
    },
];

export const CheckboxGroup = (props: CheckboxGroupProps): JSX.Element => <CheckboxGroupComponent {...props} />;
CheckboxGroup.args = {
    items: simpleItems,
    selectMax: 4,
    selectMin: 2,
    values: val,
};

export const ListCheckboxGroup = (props: CheckboxGroupProps): JSX.Element => <CheckboxGroupComponent {...props} />;
ListCheckboxGroup.args = {
    isListStyle: true,
    items: simpleItems,
    values: val,
};
