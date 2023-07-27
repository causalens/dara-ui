/**
* Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
*
* Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
*
* As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
* use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
*/
import { Meta } from '@storybook/react';

import { default as TooltipComponent, TooltipProps } from './tooltip';

export default {
    component: TooltipComponent,
    title: 'UI Components/Tooltip',
} as Meta;

export const Tooltip = (args: TooltipProps): JSX.Element => (
    <div style={{ alignItems: 'center', display: 'flex', height: '100%', justifyContent: 'center', width: '100%' }}>
        <TooltipComponent {...args} />
    </div>
);

Tooltip.args = {
    children: <div>Hover over me</div>,
    content: <div>This is a tooltip!</div>,
    placement: 'top',
    styling: 'default',
};
