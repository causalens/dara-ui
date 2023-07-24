import { Meta } from '@storybook/react';

import styled, { theme } from '@darajs/styled-components';

import ContextMenu, { MenuAction } from './context-menu';

const ResultItem = ContextMenu<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>('div');

const StyledResult = styled(ResultItem)`
    width: 100px;
    height: 100px;
    margin: 5px;
    background-color: ${() => theme.colors.success};
`;

const actions: MenuAction[] = [
    {
        action: () => null,
        label: 'Label 1',
    },
    {
        action: () => null,
        label: 'Label 2',
    },
    {
        action: () => null,
        label: 'Label 3',
    },
];

export const ContextMenuItem = (): JSX.Element => (
    <div>
        <StyledResult actions={actions} />;
        <StyledResult actions={actions} />;
        <StyledResult actions={actions} />;
    </div>
);

const meta = {
    component: ContextMenuItem,
    title: 'UI Components/ContextMenu',
} as Meta;

export default meta;
