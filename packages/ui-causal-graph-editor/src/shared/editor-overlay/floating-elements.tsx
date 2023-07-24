import type { ComponentProps, ForwardRefExoticComponent, RefAttributes } from 'react';
import type { StyledComponent } from 'styled-components';

import styled, { DefaultTheme } from '@darajs/styled-components';
import { Button } from '@darajs/ui-components';

type ButtonProps = ComponentProps<typeof Button> & RefAttributes<HTMLButtonElement>;
type ExtraButtonProps = {
    disableBoxShadow?: boolean;
    disableEvents?: boolean;
    fixedSize?: boolean;
};

export const FloatingButton: StyledComponent<
    ForwardRefExoticComponent<ButtonProps>,
    DefaultTheme,
    ExtraButtonProps,
    'styling' | 'children'
> = styled(Button).attrs((props) => ({
    ...props,
    styling: props.styling ?? 'ghost',
}))<ExtraButtonProps>`
    pointer-events: ${(props) => (props.disableEvents ? 'none' : 'all')};
    min-width: 0;
    margin: 0;
    padding: 0 1rem;

    ${(props) => (props.fixedSize ? 'height: 40px; width: 40px;' : '')};

    ${(props) => (props.styling === 'ghost' ? `background-color: ${props.theme.colors.blue1}` : '')};
    ${(props) => (props.disableBoxShadow ? '' : `box-shadow: ${props.theme.shadow.light};`)}
`;
