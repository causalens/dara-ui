/**
 * Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
 *
 * Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
 *
 * As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
 * use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
 */
import { Meta } from '@storybook/react';
import * as React from 'react';

import { Item } from '../types';
import { default as SelectComponent, SelectProps } from './select';

export default {
    component: SelectComponent,
    title: 'UI Components/Select',
} as Meta;

const simpleItems: Item[] = [
    {
        label: 'First',
        value: 1,
    },
    {
        label: 'Long Label',
        value: 2,
    },
    {
        label: 'Third Chip',
        value: 3,
    },
    {
        label: 'What if the label is too longs',
        value: 4,
    },
    {
        label: 'Fifth',
        value: 5,
    },
    {
        label: 'Sixth',
        value: 6,
    },
    {
        label: 'Seventh',
        value: 7,
    },
];

export const Select = (props: SelectProps): JSX.Element => (
    <div style={{ width: '12.5em' }}>
        <SelectComponent {...props} />
    </div>
);
Select.args = {
    items: simpleItems,
    placeholder: 'Select an item',
    size: 1,
};

export const ControlledSelect = (props: SelectProps): JSX.Element => {
    const [selectedItem, setSelectedItem] = React.useState<Item>(props.selectedItem);

    return (
        <div style={{ width: '12.5em' }}>
            <SelectComponent {...props} onSelect={(item) => setSelectedItem(item)} selectedItem={selectedItem} />
            <button onClick={() => setSelectedItem(null)} type="button">
                Clear
            </button>
        </div>
    );
};
ControlledSelect.args = {
    items: simpleItems,
    placeholder: 'Select an item',
    selectedItem: simpleItems[6],
    size: 1,
};
