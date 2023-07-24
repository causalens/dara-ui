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
