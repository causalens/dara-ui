import type { ComponentProps } from 'react';
import type { StyledComponent } from 'styled-components';

import styled, { DefaultTheme } from '@darajs/styled-components';
import { Button } from '@darajs/ui-components';

export const IconButton: StyledComponent<
    React.ForwardRefExoticComponent<ComponentProps<typeof Button> & React.RefAttributes<HTMLButtonElement>>,
    DefaultTheme
> = styled(Button)`
    svg {
        margin-right: 0.5rem;
        color: ${(props) => props.theme.colors.background};
    }
`;

export const ButtonRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;
