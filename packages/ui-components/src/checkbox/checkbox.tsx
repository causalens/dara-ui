/**
 * Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
 *
 * Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
 *
 * As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
 * use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
 */
import { useEffect, useState } from 'react';

import styled from '@darajs/styled-components';

import { InteractiveComponentProps } from '../types';

interface CheckboxWrapperProps {
    disabled: boolean;
    isListStyle?: boolean;
}

const CheckboxWrapper = styled.label<CheckboxWrapperProps>`
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    user-select: none;

    position: relative;

    display: flex;
    align-items: center;

    width: ${(props) => (props.isListStyle ? '100%' : 'fit-content')};
    padding: 0.5625rem 0rem 0.5625rem 2rem;

    font-size: 1rem;

    border-radius: 0.25rem;

    ${(props) => {
        if (props.isListStyle && !props.disabled) {
            return `
                :hover {
                    background-color: ${props.theme.colors.grey1};

                    span {
                        border: 1px solid ${props.theme.colors.grey4};
                    }
                }

                :active {
                    background-color: ${props.theme.colors.grey2};
                }
        `;
        }
    }}

    // sets checkmark indicator
    span:after {
        top: 0.05rem;
        left: 0.3rem;
        transform: rotate(45deg);

        width: 0.3125rem;
        height: 0.625rem;

        border: solid ${(props) => props.theme.colors.grey5};
        border-width: 0 2px 2px 0;
    }

    // Show the checkmark when checked
    input:checked ~ span:after {
        display: block;
    }

    :hover {
        span,
        input:checked ~ span {
            background-color: ${(props) => {
                if (props.disabled) {
                    return props.theme.colors.grey3;
                }
                if (props.isListStyle) {
                    return props.theme.colors.blue1;
                }
                return props.theme.colors.grey1;
            }};
            border: 1px solid ${(props) => props.theme.colors.grey4};
        }
    }

    :active {
        span,
        input:checked ~ span {
            background-color: ${(props) => {
                if (props.disabled) {
                    return props.theme.colors.grey3;
                }
                if (props.isListStyle) {
                    return props.theme.colors.blue1;
                }
                return props.theme.colors.grey2;
            }};
        }
    }
`;

const StyledCheckbox = styled.input<CheckboxWrapperProps>`
    cursor: pointer;
    /* Hide the browser's default checkbox */
    position: absolute;

    width: 0;
    height: 0;

    opacity: 0;

    :checked ~ span {
        background-color: ${(props) => (props.disabled ? props.theme.colors.grey3 : props.theme.colors.blue1)};
    }
`;

const StyledCheckmark = styled.span<CheckboxWrapperProps>`
    position: absolute;
    left: 0.5rem;

    width: 1rem;
    height: 1rem;

    background-color: ${(props) => (props.disabled ? props.theme.colors.grey3 : props.theme.colors.blue1)};
    border: 1px solid ${(props) => (props.disabled ? props.theme.colors.grey3 : props.theme.colors.grey4)};
    border-radius: 0.25rem;

    // hidden checkmark indicator
    :after {
        content: '';
        position: absolute;
        display: none;
    }
`;

export interface CheckboxProps extends InteractiveComponentProps<boolean> {
    /** Standard react className property */
    className?: string;
    /** Whether the checkbox is disabled. */
    disabled?: boolean;
    /** id of the current checkbox */
    id?: number;
    /** Whether to show list style of checkbox */
    isListStyle?: boolean;
    /** Sets the label to appear next to the checkbox */
    label?: string;
    /** An optional onChange handler, will be called whenever the state of the checkbox changes */
    onChange?: (checked: boolean, e: React.FormEvent<HTMLInputElement>) => void | Promise<void>;
    /** An optional onCLick handler */
    onClick?: (e: React.FormEvent<HTMLInputElement>) => void | Promise<void>;
    /** Setting this puts the checkbox in controlled mode */
    selected?: boolean;
}

/**
 * A simple checkbox component
 *
 * @param {CheckboxProps} props - the component props
 */
function Checkbox(props: CheckboxProps): JSX.Element {
    const [checked, setChecked] = useState(props.selected || props.initialValue);

    useEffect(() => {
        if (props.selected !== undefined) {
            setChecked(props.selected);
        }
    }, [props.selected]);

    const onClick = (e: React.SyntheticEvent<HTMLInputElement, Event>): void => {
        // Disabled removes all behaviour
        if (props.disabled) {
            return;
        }

        if (props.selected === undefined) {
            setChecked(!checked);
        }
        if (props.onChange) {
            props.onChange(!checked, e);
        }
    };

    return (
        <CheckboxWrapper className={props.className} disabled={props.disabled} isListStyle={props.isListStyle}>
            {props.label}
            <StyledCheckbox
                aria-disabled={props.disabled}
                checked={props.selected}
                disabled={props.disabled}
                isListStyle={props.isListStyle}
                onChange={(e) => onClick(e)}
                onClick={props.onClick}
                type="checkbox"
                value={props.id}
            />
            <StyledCheckmark disabled={props.disabled} isListStyle={props.isListStyle} />
        </CheckboxWrapper>
    );
}

export default Checkbox;
