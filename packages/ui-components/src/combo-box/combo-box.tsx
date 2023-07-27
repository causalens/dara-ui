/**
 * Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
 *
 * Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
 *
 * As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
 * use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
 */
import { UseComboboxReturnValue, UseComboboxStateChangeTypes, useCombobox } from 'downshift';
import { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { usePopper } from 'react-popper';

import styled from '@darajs/styled-components';

import Button from '../button/button';
import Tooltip from '../tooltip/tooltip';
import { InteractiveComponentProps, Item } from '../types';
import { Chevron, List, ListItem, sameWidthModifier } from '../utils';

const { stateChangeTypes } = useCombobox;

interface WrapperProps {
    isDisabled: boolean;
    isErrored: boolean;
    isOpen: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
    display: inline-flex;

    width: 100%;
    min-width: 4rem;
    height: 2.5rem;

    border-radius: ${(props) => (props.isOpen ? '0.25rem 0.25rem 0px 0px' : '0.25rem')};

    ${(props) => {
        if (props.isDisabled) {
            return `
                border: 1px solid ${props.theme.colors.grey2};

                svg {
                    color: ${props.theme.colors.grey2};
                }
            `;
        }

        if (props.isErrored) {
            return `border: 1px solid ${props.theme.colors.error};`;
        }

        return `
            border: 1px solid ${props.isOpen ? props.theme.colors.grey3 : props.theme.colors.grey1};
            :hover {
                border: 1px solid ${props.theme.colors.grey3};

            }
        `;
    }}
`;

interface InputWrapperProps {
    disabled: boolean;
    isOpen: boolean;
}

export const InputWrapper = styled.div<InputWrapperProps>`
    display: flex;
    flex: 1 1 auto;
    align-items: center;
    justify-content: space-between;

    width: calc(100% - 1rem);
    height: 100%;
    padding: 0 0.25rem 0 1rem;

    color: ${(props) => (props.disabled ? props.theme.colors.grey2 : props.theme.colors.text)};

    background-color: ${(props) => props.theme.colors.grey1};
    border: none;
    border-radius: ${(props) => (props.isOpen ? '0.25rem 0.25rem 0px 0px' : '0.25rem')};

    :hover {
        background-color: ${(props) => (props.disabled ? props.theme.colors.grey1 : props.theme.colors.grey2)};
    }
    svg {
        height: 0.8rem;
    }
`;

export const Input = styled.input`
    overflow: hidden;
    flex: 1 1 auto;

    height: 100%;
    margin-right: 0.5rem;
    padding: 0rem;

    font-size: ${(props) => (props.size ? `${props.size}rem` : props.theme.font.size)};
    font-weight: 300;
    color: ${(props) => props.theme.colors.text};
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;

    background-color: transparent;
    border: none;
    outline: 0;

    :disabled {
        cursor: not-allowed;
        color: ${(props) => props.theme.colors.grey2};
    }
`;

export const NoItemsLabel = styled.span`
    display: flex;
    flex: 1 1 auto;
    align-items: center;
    justify-content: center;

    height: 2rem;

    font-size: 1rem;
    color: ${(props) => props.theme.colors.text};

    background-color: ${(props) => props.theme.colors.blue1};
`;

const DropdownList = styled(List)`
    margin-left: -1px;
    border-radius: 0px 0px 0.25rem 0.25rem;
    box-shadow: ${(props) => props.theme.shadow.light};
`;

export const ChevronButton = styled(Button).attrs((attrs) => ({ ...attrs, styling: 'ghost' }))`
    min-width: 0;
    height: auto;
    margin: 0;
    padding: 0 0.25rem;

    background-color: transparent !important;
`;

export interface ComboBoxProps extends InteractiveComponentProps<Item> {
    /** Whether to open the select dropdown on load or not, defaults to false */
    initialIsOpen?: boolean;
    /** The items to pick from the list. Each should have a label and a value */
    items: Array<Item>;
    /** An optional onSelect handler for listening to changes in the selected item */
    onSelect?: (item: Item) => void | Promise<void>;
    /** An optional placeholder for the input field to display when nothing is selected, defaults to '' */
    placeholder?: string;
    /** Set the selected value to a specific value, will put the component in controlled mode. Set to `null` to reset the value. */
    selectedItem?: Item;
    /** Font size in rem to show in the Select */
    size?: number;
    /** Pass through of style property to the root element */
    style?: React.CSSProperties;
}

/**
 * A single select combobox component, accepts a list of items to select from and an onSelect handler to listen for
 * changes. Allows to search for item by typing in combo box.
 *
 * @param {ComboBoxProps} props - the component props
 */
function ComboBox(props: ComboBoxProps): JSX.Element {
    const referenceElement = useRef<HTMLDivElement>(null);
    const popperElement = useRef<HTMLElement>(null);
    const { styles, attributes, update } = usePopper(referenceElement.current, popperElement.current, {
        modifiers: [sameWidthModifier],
        placement: 'bottom-start',
    });

    const [inputValue, setInputValue] = useState(props.initialValue?.label ?? props.selectedItem?.label ?? '');
    const [pendingHighlight, setPendingHighlight] = useState(null);

    const filteredItems = props.items.filter((item) =>
        inputValue ? item.label?.toLowerCase().includes(inputValue?.toLowerCase()) : true
    );

    const {
        selectedItem,
        isOpen,
        getMenuProps,
        getInputProps,
        getToggleButtonProps,
        highlightedIndex,
        getItemProps,
        setHighlightedIndex,
    }: UseComboboxReturnValue<Item> = useCombobox<Item>({
        initialIsOpen: props.initialIsOpen,
        initialSelectedItem: props.initialValue ?? props.selectedItem,
        itemToString: (item) => (item ? item.label : ''),
        items: filteredItems,
        onInputValueChange: (change) => {
            setInputValue(change.inputValue);
        },
        onSelectedItemChange: (changes) => {
            if (props.onSelect) {
                if (
                    (props.selectedItem && changes.selectedItem?.value !== props.selectedItem?.value) ||
                    !props.selectedItem
                ) {
                    props.onSelect(changes.selectedItem);
                }
            }
        },
        stateReducer: (state, { changes, type }) => {
            // This resets the input when the dropdown is opened
            if (
                type === stateChangeTypes.InputFocus ||
                (type === stateChangeTypes.ToggleButtonClick && changes.isOpen) ||
                (type === stateChangeTypes.ControlledPropUpdatedSelectedItem && changes.isOpen)
            ) {
                // This is a hack to change the highlight in the next render cycle so filteredItems had time to update
                setPendingHighlight(
                    changes.selectedItem ? props.items.findIndex((i) => i.value === changes.selectedItem.value) : 0
                );
                return {
                    ...changes,
                    inputValue: '',
                };
            }
            // This restores the input value when the dropdown is closed or an item is picked
            if (
                (
                    [
                        stateChangeTypes.InputKeyDownEnter,
                        stateChangeTypes.ItemClick,
                        stateChangeTypes.InputBlur,
                        stateChangeTypes.InputKeyDownEscape,
                        stateChangeTypes.ToggleButtonClick,
                    ] as UseComboboxStateChangeTypes[]
                ).includes(type)
            ) {
                return {
                    ...changes,
                    inputValue: changes.selectedItem?.label || '',
                };
            }

            return changes;
        },
        // Only set the selectedItem key if it has been explicitly set in props
        ...('selectedItem' in props && { selectedItem: props.selectedItem }),
    });
    useEffect(() => {
        if (isOpen && pendingHighlight !== null) {
            setHighlightedIndex(pendingHighlight);
            setPendingHighlight(null);
        }
    }, [isOpen, pendingHighlight, setHighlightedIndex]);

    useEffect(() => {
        if (props.selectedItem === null) {
            setInputValue('');
        }
    }, [props.selectedItem]);

    // After the dropdown is opened, trigger an update of it's position, so it positions correctly.
    useEffect(() => {
        if (isOpen && update) {
            update();
        }
    }, [isOpen, update]);

    // Both downshift and popper want a ref to the reference element and popper element, the following blocks combine
    // these refs into a single function that can be applied to the elements
    const menuProps = getMenuProps();
    const setMenuRef = menuProps.ref;
    delete menuProps.ref;
    const setMenuReference = (value: any): void => {
        setMenuRef(value);
        popperElement.current = value;
    };

    return (
        <Tooltip content={props.errorMsg} disabled={!props.errorMsg} styling="error">
            <Wrapper
                className={props.className}
                isDisabled={props.disabled}
                isErrored={!!props.errorMsg}
                isOpen={isOpen}
                style={props.style}
            >
                <InputWrapper disabled={props.disabled} isOpen={isOpen} ref={referenceElement}>
                    <Input
                        {...getInputProps({
                            disabled: props.disabled,
                        })}
                        placeholder={
                            (selectedItem === null ? props.placeholder : selectedItem?.label) ?? props.placeholder
                        }
                        size={props.size}
                    />
                    <ChevronButton {...getToggleButtonProps()}>
                        <Chevron disabled={props.disabled} isOpen={isOpen} />
                    </ChevronButton>
                </InputWrapper>
                {ReactDOM.createPortal(
                    <DropdownList
                        {...menuProps}
                        {...attributes.popper}
                        isOpen={isOpen}
                        ref={setMenuReference}
                        style={{
                            ...styles.popper,

                            width: parseFloat((styles.popper as any)?.width) + 2,
                            zIndex: 9999,
                        }}
                    >
                        {filteredItems.length > 0 &&
                            filteredItems.map((item, index) => (
                                <ListItem
                                    {...getItemProps({ index, item })}
                                    hovered={index === highlightedIndex}
                                    key={`item-${index}`}
                                    size={props.size}
                                    title={item.label}
                                >
                                    {item.label}
                                </ListItem>
                            ))}
                        {filteredItems.length === 0 && <NoItemsLabel>No Items</NoItemsLabel>}
                    </DropdownList>,
                    document.body
                )}
            </Wrapper>
        </Tooltip>
    );
}

export default ComboBox;
