/**
 * Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
 *
 * Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
 *
 * As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
 * use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
 */
import styled from '@darajs/styled-components';

interface ListProps {
    isOpen: boolean;
    maxItems?: number;
}

const List = styled.div<ListProps>`
    z-index: 5000;

    overflow-y: auto;
    display: ${(props) => (props.isOpen ? 'flex' : 'none')};
    flex-direction: column;

    max-height: calc(${(props) => (props.maxItems || 5) * 2}em + 2px);

    border: 1px solid ${(props) => props.theme.colors.grey3};
`;

interface ListItemProps {
    hovered?: boolean;
    size?: number;
}

const ListItem = styled.span<ListItemProps>`
    cursor: pointer;
    user-select: none;

    overflow: hidden;

    width: 100%;
    min-height: 2rem;
    padding: 0.25rem 1rem;

    font-size: ${(props) => (props.size ? `${props.size}rem` : '1rem')};
    font-weight: 300;
    color: ${(props) => props.theme.colors.text};
    text-overflow: ellipsis;
    white-space: nowrap;

    background-color: ${(props) => (props.hovered ? props.theme.colors.grey2 : props.theme.colors.blue1)};
    border-bottom: 1px solid ${(props) => props.theme.colors.grey3};

    :active {
        color: ${(props) => props.theme.colors.blue1};
        background-color: ${(props) => props.theme.colors.primary};
    }

    &:last-child {
        border-bottom: none;
    }
`;

export { List, ListItem };
