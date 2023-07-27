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

import { Key } from '../constants';
import { InteractiveComponentProps } from '../types';

const ErrorMessage = styled.span`
    display: flex;
    flex-direction: column;

    padding-left: 1rem;

    font-size: 0.75rem;
    color: ${(props) => props.theme.colors.error};
`;

interface PrimaryTextAreaProps {
    isErrored: boolean;
}

const PrimaryTextArea = styled.textarea<PrimaryTextAreaProps>`
    display: flex;
    flex: 1 1 auto;
    align-items: center;

    width: 100%;
    height: 100%;
    min-height: 3.6rem;
    padding: 1rem;

    font-size: 1rem;
    color: ${(props) => (props.disabled ? props.theme.colors.grey2 : props.theme.colors.text)};

    background-color: ${(props) => props.theme.colors.grey1};
    border: 1px solid
        ${(props) => {
            return props.isErrored ? props.theme.colors.error : props.theme.colors.grey1;
        }};
    border-radius: 0.25rem;
    outline: 0;

    :focus:not(:disabled) {
        border: 1px solid ${(props) => (props.isErrored ? props.theme.colors.error : props.theme.colors.grey3)};
    }

    :hover:not(:disabled) {
        border: 1px solid ${(props) => (props.isErrored ? props.theme.colors.error : props.theme.colors.grey2)};
    }

    :active:not(:disabled) {
        border: 1px solid ${(props) => (props.isErrored ? props.theme.colors.error : props.theme.colors.grey3)};
    }

    :disabled {
        cursor: not-allowed;
    }

    ::placeholder {
        font-style: italic;
    }
`;

export interface TextAreaProps extends InteractiveComponentProps<string> {
    /** An optional prop to focus the textarea upon mounting it */
    autoFocus?: boolean;
    /** An optional keydown event filter, that can filter out invalid chars from an textarea. Should return true to let
     * the char through */
    keydownFilter?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => boolean;
    /** An optional onBlur handler for listening to textarea blur events */
    onBlur?: (e: React.SyntheticEvent<HTMLTextAreaElement>) => void | Promise<void>;
    /** An optional onChange handler for listening to changes in the textarea */
    onChange?: (value: string, e?: React.SyntheticEvent<HTMLTextAreaElement>) => void | Promise<void>;
    /** An optional onClick handler for listening to input click events */
    onClick?: (e: React.SyntheticEvent<HTMLTextAreaElement>) => void | Promise<void>;
    /** An optional event listener for complete events (enter presses) */
    onComplete?: () => void | Promise<void>;
    /** An optional placeholder that will be used when the textarea is empty, defaults to '' */
    placeholder?: string;
    /** An optional property which sets whether the textarea is resizable, and if so, in which directions */
    resize?: 'none' | 'both' | 'horizontal' | 'vertical' | 'block' | 'inline';
}

/**
 * A simple text area component, accepts an onChange handler to listen for changes.
 *
 * @param props - the component props
 */
function TextArea({
    autoFocus,
    className,
    disabled,
    errorMsg,
    initialValue,
    keydownFilter,
    onBlur,
    onChange,
    onClick,
    onComplete,
    placeholder,
    style,
    value,
    resize,
}: TextAreaProps): JSX.Element {
    const onChangeText = (e: React.SyntheticEvent<HTMLTextAreaElement>): void => {
        const target = e.target as HTMLInputElement;
        if (onChange) {
            onChange(target.value, e);
        }
    };

    const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>): void => {
        if (keydownFilter && !keydownFilter(e)) {
            e.preventDefault();
        }
        if (e.key === Key.ENTER && onComplete) {
            onComplete();
        }
    };

    return (
        <div className={className} style={style}>
            <PrimaryTextArea
                autoFocus={autoFocus}
                defaultValue={initialValue}
                disabled={disabled}
                isErrored={!!errorMsg}
                onBlur={onBlur}
                onChange={onChangeText}
                onClick={onClick}
                onKeyDown={onKeyDown}
                placeholder={placeholder}
                style={{ resize }}
                value={value}
            />
            {errorMsg && <ErrorMessage>{errorMsg}</ErrorMessage>}
        </div>
    );
}

export default TextArea;
