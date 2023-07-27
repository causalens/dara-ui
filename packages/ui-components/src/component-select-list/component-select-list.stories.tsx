/**
 * Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
 *
 * Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
 *
 * As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
 * use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
 */
import { Meta } from '@storybook/react';

import { default as ComponentSelectListComponent, ComponentSelectListProps } from './component-select-list';

export default {
    component: ComponentSelectListComponent,
    title: 'UI Components/ComponentSelectList',
} as Meta;

const exampleItems = [
    { component: <div>Test A</div>, subtitle: 'Subtitle', title: 'Title for A' },
    { component: <div>Test B</div>, subtitle: 'Subtitle', title: 'Title for B' },
    { component: <div>Test C</div>, subtitle: 'Subtitle', title: 'Title for C' },
];

export const ComponentSelectList = (args: ComponentSelectListProps): JSX.Element => (
    <ComponentSelectListComponent {...args} />
);
ComponentSelectList.args = {
    items: exampleItems,
};
