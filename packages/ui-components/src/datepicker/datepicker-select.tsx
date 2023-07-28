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
import { Placement } from '@popperjs/core';
import { useSelect } from 'downshift';
import { useEffect, useRef, useState } from 'react';
import * as React from 'react';
import ReactDOM from 'react-dom';
import { usePopper } from 'react-popper';

import styled from '@darajs/styled-components';

import Tooltip from '../tooltip/tooltip';
import { InteractiveComponentProps, Item } from '../types';
import { Chevron, sameWidthModifier } from '../utils';

const { stateChangeTypes } = useSelect;

interface SelectedItemProps {
    size?: number;
}

const SelectedItem = styled.div<SelectedItemProps>`
    width: 100%;
    font-size: ${(props) => (props.size ? `${props.size}rem` : props.theme.font.size)};
    font-weight: 300;
`;

interface WrapperProps {
    isDisabled: boolean;
    isErrored: boolean;
}

const Wrapper = styled.div<WrapperProps>`
    display: inline-flex;
    width: 6.25rem;
    height: 1.5rem;
    border-radius: 0.25rem;

    ${(props) => {
        if (props.isDisabled) {
            return `
                border: 1px solid ${props.theme.colors.grey1};
                cursor: not-allowed;
            `;
        }

        if (props.isErrored) {
            return `border: 1px solid ${props.theme.colors.error};`;
        }

        return `
            border: 1px solid ${props.theme.colors.grey1};
        `;
    }}
`;

const SelectButton = styled.button`
    cursor: pointer;

    display: inline-flex;
    flex: 1 1 auto;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 100%;
    padding: 0 0.5rem 0rem 1rem;

    font-size: ${(props) => props.theme.font.size};

    border: none;
    outline: 0;

    :not(:enabled) {
        cursor: not-allowed;
    }
`;

const SelectButtonPrimary = styled(SelectButton)`
    justify-content: start;

    width: 100%;
    padding: 0rem 0.25rem;

    font-size: 0.875rem;
    color: ${(props) => props.theme.colors.text};

    background-color: ${(props) => props.theme.colors.grey1};
    border-radius: 0.25rem;

    :disabled {
        color: ${(props) => props.theme.colors.grey2};

        svg {
            color: ${(props) => props.theme.colors.grey2};
        }
    }

    :hover:enabled {
        background-color: ${(props) => props.theme.colors.grey2};
    }

    svg {
        width: 1rem !important;
        height: 0.8rem;
        margin-left: 0.5rem !important;
    }
`;

interface DatepickerListItemProps {
    hovered?: boolean;
    isSelected?: boolean;
    size?: number;
}

const DatepickerListItem = styled.span<DatepickerListItemProps>`
    cursor: pointer;
    user-select: none;

    overflow: hidden;
    display: flex;
    align-items: center;

    width: 100%;
    min-height: 2rem;
    padding: 0.25rem 1.5rem;

    font-size: ${(props) => (props.size ? `${props.size}rem` : props.theme.font.size)};
    font-weight: 300;
    color: ${(props) => (props.isSelected ? '#FFF' : props.theme.colors.text)};
    text-overflow: ellipsis;
    white-space: nowrap;

    background-color: ${(props) => {
        if (props.isSelected) {
            return props.theme.colors.primary;
        }
        if (props.hovered) {
            return props.theme.colors.grey2;
        }
        return props.theme.colors.grey1;
    }};

    :active {
        background-color: ${(props) => props.theme.colors.grey1};
    }

    &:last-child {
        border-bottom: none;
    }
`;

interface DropdownListProps {
    displacement: number;
    isOpen: boolean;
    maxItems?: number;
}

const DropdownList = styled.div<DropdownListProps>`
    overflow-y: auto;
    display: ${(props) => (props.isOpen ? 'flex' : 'none')};
    flex-direction: column;
    gap: 0.125rem;

    max-height: calc(${(props) => (props.maxItems || 5) * 2}em + 2px);
    margin-left: ${(props) => props.displacement}rem;

    background-color: ${(props) => props.theme.colors.grey1};
    border: None;
    outline: 0;
`;

export interface SelectProps extends InteractiveComponentProps<Item> {
    /** The left displacement from dropdown the items should show */
    displacement?: number;
    /** A function taking an element for the ref of the dropdown  */
    dropdownRef?: (element: any) => void;
    /** className property to put on the select's items and the item wrapper */
    itemClass?: string;
    /** The items to pick from the list. Each should have a label and a value */
    items: Array<Item>;
    /** The maximum number of items to display, defaults to 5 */
    maxItems?: number;
    /** onClick event. */
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void | Promise<void>;
    /** An optional onSelect handler for listening to changes in the selected item */
    onSelect?: (item: Item) => void | Promise<void>;
    /** Specify a specific placement for the list */
    placement?: Placement;
    /** Set the selected value to a specific value, will put the component in controlled mode */
    selectedItem?: Item;
    /** Font size in rem to show in the Select */
    size?: number;
}

/**
 * A single select dropdown component that has no search capability, accepts a list of items to select from and an
 * onSelect handler to listen for changes in the selection
 *
 * @param {SelectProps} props - the props of the component
 */
function DatepickerSelect(props: SelectProps): JSX.Element {
    const referenceElement = useRef<HTMLElement>(null);
    const popperElement = useRef<HTMLElement>(null);
    const { styles, attributes, update } = usePopper(referenceElement.current, popperElement.current, {
        modifiers: [sameWidthModifier],
        placement: props.placement || 'bottom-start',
    });

    const [pendingHighlight, setPendingHighlight] = useState(null);

    const {
        isOpen,
        selectedItem,
        getToggleButtonProps,
        getMenuProps,
        highlightedIndex,
        getItemProps,
        setHighlightedIndex,
    } = useSelect<Item>({
        initialSelectedItem: props.initialValue,
        itemToString: (item) => item.label,
        items: props.items,
        onSelectedItemChange: (changes) => {
            const selected = changes.selectedItem;
            if (props.onSelect) {
                props.onSelect(selected);
            }
        },
        stateReducer: (state, { changes, type }) => {
            // hack to force highlight to update again in the next render
            if (type === stateChangeTypes.ToggleButtonClick) {
                setPendingHighlight(
                    changes.selectedItem ? props.items.findIndex((i) => i.value === changes.selectedItem.value) : 0
                );
            }

            return changes;
        },
        // Only set the selectedItem key if it has been explicitly set in props
        ...(props.selectedItem && { selectedItem: props.selectedItem }),
    });

    useEffect(() => {
        if (isOpen && pendingHighlight !== null) {
            setHighlightedIndex(pendingHighlight);
            setPendingHighlight(null);
        }
    }, [isOpen, pendingHighlight, setHighlightedIndex]);

    // After the dropdown is opened, trigger an update of it's position, so it positions correctly.
    useEffect(() => {
        if (isOpen && update) {
            update();
        }
    }, [isOpen, update]);

    // Both downshift and popper want a ref to the reference element and popper element, the following blocks combine
    // these refs into a single function that can be applied to the elements
    const buttonProps = getToggleButtonProps({ disabled: props.disabled });
    const setButtonRef = buttonProps.ref;
    delete buttonProps.ref;
    const setButtonReference = (value: any): void => {
        setButtonRef(value);
        referenceElement.current = value;
    };

    const menuProps = getMenuProps();
    const setMenuRef = menuProps.ref;
    delete menuProps.ref;
    const setMenuReference = (value: any): void => {
        setMenuRef(value);
        popperElement.current = value;
        props.dropdownRef?.(value);
    };

    return (
        <Tooltip content={props.errorMsg} disabled={!props.errorMsg} styling="error">
            <Wrapper
                className={props.className}
                isDisabled={props.disabled}
                isErrored={!!props.errorMsg}
                onClick={props.onClick}
                style={props.style}
            >
                <SelectButtonPrimary disabled={props.disabled} {...buttonProps} ref={setButtonReference} type="button">
                    <SelectedItem size={props.size}>{selectedItem ? selectedItem.label : 'Select'}</SelectedItem>
                    <Chevron disabled={props.disabled} isOpen={isOpen} />
                </SelectButtonPrimary>
                {ReactDOM.createPortal(
                    <DropdownList
                        {...menuProps}
                        {...attributes.popper}
                        className={`${(menuProps?.className as string) ?? ''} ${attributes?.popper?.className ?? ''} ${
                            props.itemClass
                        }`}
                        displacement={props.displacement}
                        isOpen={isOpen}
                        maxItems={7}
                        ref={setMenuReference}
                        style={{
                            ...styles.popper,

                            marginTop: `0.8rem`,
                            width: '16.25rem',
                            zIndex: 9999,
                        }}
                    >
                        {props.items.map((item, index) => {
                            const { itemClassName, ...itemProps } = getItemProps({ index, item });

                            return (
                                <DatepickerListItem
                                    {...itemProps}
                                    aria-selected={selectedItem.label === item.label}
                                    className={`${itemClassName as string} ${props.itemClass}`}
                                    hovered={index === highlightedIndex}
                                    isSelected={selectedItem.label === item.label}
                                    key={`item-${index}`}
                                    size={props.size}
                                    title={item.label}
                                >
                                    {item.label}
                                </DatepickerListItem>
                            );
                        })}
                    </DropdownList>,
                    document.body
                )}
            </Wrapper>
        </Tooltip>
    );
}

export default DatepickerSelect;
