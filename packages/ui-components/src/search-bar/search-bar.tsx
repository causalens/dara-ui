/**
 * Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
 *
 * Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
 *
 * As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
 * use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
 */
import * as React from 'react';

import styled from '@darajs/styled-components';
import { MagnifyingGlass } from '@darajs/ui-icons';

import Input from '../input/input';
import { InteractiveComponentProps } from '../types';

const Wrapper = styled.div`
    display: flex;
    margin: 0rem 0.5rem;
`;

const SearchBarComponent = styled(Input)`
    input {
        padding-right: 2.25rem;
    }

    :hover:not(:disabled) {
        input {
            border: 1px solid ${(props) => props.theme.colors.grey3};
        }
    }
`;

const SearchBarIcon = styled(MagnifyingGlass)`
    position: relative;
    top: 0.625rem;
    right: 1.75rem;

    height: 1.25rem;

    color: ${(props) => props.theme.colors.grey4};
`;

export interface SearchBarProps extends InteractiveComponentProps<string> {
    /** An optional maximum length */
    maxLength?: number;
    /** An optional onChange handler for listening to changes in the input */
    onChange?: (value: string, e?: React.SyntheticEvent<HTMLInputElement>) => void | Promise<void>;
    /** An optional placeholder that will be used when the input is empty, defaults to '' */
    placeholder?: string;
}

/**
 * A search bar component, accepts an onChange handler to listen for changes.
 *
 * @param props - the component props
 */
function SearchBar(props: SearchBarProps): JSX.Element {
    return (
        <Wrapper>
            <SearchBarComponent
                className={props.className}
                disabled={props.disabled}
                maxLength={props.maxLength}
                onChange={props.onChange}
                placeholder={props.placeholder ?? 'Search'}
                style={props.style}
                value={props.value}
            />
            <SearchBarIcon />
        </Wrapper>
    );
}

export default SearchBar;
