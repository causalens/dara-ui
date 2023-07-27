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
import { default as ComboBoxComponent, ComboBoxProps } from './combo-box';

export default {
    component: ComboBoxComponent,
    title: 'UI Components/Combo Box',
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

export const ComboBox = (props: ComboBoxProps): JSX.Element => (
    <div style={{ width: '12.5em' }}>
        <ComboBoxComponent {...props} />
    </div>
);
ComboBox.args = {
    items: simpleItems,
    placeholder: 'Select an item',
    size: 1,
};

export const ControlledComboBox = (props: ComboBoxProps): JSX.Element => {
    const [selectedItem, setSelectedItem] = React.useState<Item>(props.selectedItem);

    return (
        <div style={{ width: '12.5em' }}>
            <ComboBoxComponent {...props} onSelect={(item) => setSelectedItem(item)} selectedItem={selectedItem} />
            <button onClick={() => setSelectedItem(null)} type="button">
                Reset
            </button>
        </div>
    );
};
ControlledComboBox.args = {
    ...ComboBox.args,
    placeholder: 'Select an item',
    selectedItem: simpleItems[6],
};
