/**
 * Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
 *
 * Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
 *
 * As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
 * use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
 */
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
