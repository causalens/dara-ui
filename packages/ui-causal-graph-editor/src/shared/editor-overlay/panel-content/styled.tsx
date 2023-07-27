/**
 * Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
 *
 * Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
 *
 * As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
 * use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
 */
import styled from '@darajs/styled-components';
import { ComboBox } from '@darajs/ui-components';

export const ColumnWrapper = styled.div<{ $fillHeight?: boolean; $gap?: number; $scrollable?: boolean }>`
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.$gap ?? 0.75}rem;

    width: 100%;
    height: ${(props) => (props.$fillHeight ? '100%' : 'auto')};

    ${(props) =>
        props.$scrollable &&
        `
        overflow-y: auto;
        flex-grow: 1;
    `}
`;

export const SectionTitle = styled.h4`
    font-size: 1rem;
    font-weight: 400;
    color: ${(props) => props.theme.colors.text};
`;

export const PanelSelect = styled(ComboBox)`
    & > div {
        background-color: ${(props) => props.theme.colors.blue1};
    }
`;
