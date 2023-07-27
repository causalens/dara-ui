/**
* Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
*
* Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
*
* As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
* use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
*/
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
