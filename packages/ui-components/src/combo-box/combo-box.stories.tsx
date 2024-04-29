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
import * as React from 'react';

import { Item } from '../types';
import { default as ComboBoxComponent, ComboBoxProps } from './combo-box';

export default {
    component: ComboBoxComponent,
    title: 'UI Components/Combo Box',
} as Meta;

const simpleItems: Item[] = Array.from({ length: 1000 }, (v, i) => ({
    label: `Item ${i + 1}`,
    value: Math.random(), // Or any other logic to assign a value
}));

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
            <div style={{ height: '3000px', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                <ComboBoxComponent {...props} onSelect={(item) => setSelectedItem(item)} selectedItem={selectedItem} />
            </div>
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
