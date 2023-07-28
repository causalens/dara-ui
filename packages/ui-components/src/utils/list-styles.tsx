/**
 * Copyright 2023 Impulse Innovations Limited
 *
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
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
