/**
 * Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
 *
 * Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
 *
 * As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
 * use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
 */
import { Meta } from '@storybook/react';
import { useState } from 'react';

import { Item } from '../types';
import { DatePickerProps, default as DatepickerComponent } from './datepicker';
import { default as DatepickerSelectComponent, SelectProps } from './datepicker-select';

export default {
    component: DatepickerComponent,
    title: 'UI Components/Datepicker',
} as Meta;

export const PlainDatepicker = (args: DatePickerProps): JSX.Element => <DatepickerComponent {...args} />;
PlainDatepicker.args = {
    initialValue: new Date(),
    shouldCloseOnSelect: false,
};

export const DateConstraintDatepicker = (args: DatePickerProps): JSX.Element => <DatepickerComponent {...args} />;
DateConstraintDatepicker.args = {
    maxDate: new Date('1995-12-19T00:00:00'),
    minDate: new Date('1995-12-17T00:00:00'),
    shouldCloseOnSelect: false,
};

export const DatepickerWithTime = (args: DatePickerProps): JSX.Element => <DatepickerComponent {...args} />;
DatepickerWithTime.args = { shouldCloseOnSelect: false, showTimeInput: true };

export const DatepickerWithRange = (args: DatePickerProps): JSX.Element => <DatepickerComponent {...args} />;
DatepickerWithRange.args = {
    initialValue: [new Date('1995-12-17T03:24:00'), new Date()],
    selectsRange: true,
    shouldCloseOnSelect: false,
};

export const DatepickerWithTimeAndRange = (args: DatePickerProps): JSX.Element => <DatepickerComponent {...args} />;
DatepickerWithTimeAndRange.args = {
    selectsRange: true,
    shouldCloseOnSelect: false,
    showTimeInput: true,
};

const yearItems: Item[] = [
    {
        label: '2016',
        value: 2016,
    },
    {
        label: '2017',
        value: 2017,
    },
    {
        label: '2018',
        value: 2018,
    },
    {
        label: '2019',
        value: 2019,
    },
    {
        label: '2020',
        value: 2020,
    },
    {
        label: '2021',
        value: 2021,
    },
    {
        label: '2022',
        value: 2022,
    },
    {
        label: '2023',

        value: 2023,
    },
    {
        label: '2024',
        value: 2024,
    },
    {
        label: '2025',
        value: 2025,
    },
];
export const DatepickerSelect = (args: SelectProps): JSX.Element => {
    const [selectedItem, setSelectedItem] = useState<Item>(args.selectedItem);

    return <DatepickerSelectComponent {...args} onSelect={(e) => setSelectedItem(e)} selectedItem={selectedItem} />;
};
DatepickerSelect.args = {
    items: yearItems,
    selectedItem: yearItems[7],
};
