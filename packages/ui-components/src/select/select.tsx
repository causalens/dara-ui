import { Placement } from '@popperjs/core';
import { useSelect } from 'downshift';
import { useEffect, useRef } from 'react';
import * as React from 'react';
import ReactDOM from 'react-dom';
import { usePopper } from 'react-popper';

import styled from '@darajs/styled-components';

import Tooltip from '../tooltip/tooltip';
import { InteractiveComponentProps, Item } from '../types';
import { Chevron, List, ListItem, sameWidthModifier } from '../utils';

interface SelectedItemProps {
    size?: number;
}

const SelectedItem = styled.div<SelectedItemProps>`
    overflow: hidden;

    /* The space available is that of the wrapper minus of the chevron */
    width: calc(100% - 1rem);
    margin-right: 0.5rem;

    font-size: ${(props) => (props.size ? `${props.size}rem` : '1rem')};
    font-weight: 300;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

interface WrapperProps {
    isDisabled: boolean;
    isErrored: boolean;
    isOpen: boolean;
}

const Wrapper = styled.div<WrapperProps>`
    display: inline-flex;

    width: 100%;
    min-width: 4rem;
    height: 2.5rem;

    border-radius: ${(props) => (props.isOpen ? '0.25rem 0.25rem 0rem 0rem' : '0.25rem')};

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
            border: 1px solid ${props.isOpen ? props.theme.colors.grey3 : props.theme.colors.grey1};
            :hover {
                border: 1px solid ${props.theme.colors.grey3};

            }
        `;
    }}
`;

interface SelectButtonProps {
    isOpen: boolean;
}

const SelectButton = styled.button<SelectButtonProps>`
    display: inline-flex;
    flex: 1 1 auto;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 100%;
    padding: 0 0.5rem 0rem 1rem;

    font-size: 1rem;
    color: ${(props) => props.theme.colors.text};

    background-color: ${(props) => props.theme.colors.grey1};
    border: none;
    border-radius: ${(props) => (props.isOpen ? '0.25rem 0.25rem 0rem 0rem' : '0.25rem')};
    outline: 0;

    :not(:enabled) {
        cursor: not-allowed;
    }

    :disabled {
        color: ${(props) => props.theme.colors.grey2};
        background-color: ${(props) => props.theme.colors.grey1};

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
    }
`;

const DropdownList = styled(List)`
    margin-left: -1px;
    border-radius: 0px 0px 0.25rem 0.25rem;
    outline: 0;
    box-shadow: ${(props) => props.theme.shadow.light};
`;

export interface SelectProps extends InteractiveComponentProps<Item> {
    /** Whether to force the list to the same width as the parent, defaults to true */
    applySameWidthModifier?: boolean;
    /** A function taking an element for the ref of the dropdown  */
    dropdownRef?: (element: any) => void;
    /** Whether to open the select dropdown on load or not, defaults to false */
    initialIsOpen?: boolean;
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
    /** An optional placeholder for the input field to display when nothing is selected, defaults to '' */
    placeholder?: string;
    /** Specify a specific placement for the list */
    placement?: Placement;
    /** Set the selected value to a specific value, will put the component in controlled mode. Set to `null` to reset the value */
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
function Select(props: SelectProps): JSX.Element {
    const referenceElement = useRef(null);
    const popperElement = useRef(null);
    const { styles, attributes, update } = usePopper(referenceElement.current, popperElement.current, {
        modifiers: props.applySameWidthModifier === false ? [] : [sameWidthModifier],
        placement: props.placement || 'bottom-start',
    });

    const { isOpen, selectedItem, getToggleButtonProps, getMenuProps, highlightedIndex, getItemProps } =
        useSelect<Item>({
            initialIsOpen: props.initialIsOpen,
            initialSelectedItem: props.initialValue,
            itemToString: (item) => item.label,
            items: props.items,
            onSelectedItemChange: (changes) => {
                const selected = changes.selectedItem;
                props.onSelect?.(selected);
            },
            // Only set the selectedItem key if it has been explicitly set in props
            ...('selectedItem' in props && { selectedItem: props.selectedItem }),
        });

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
                isOpen={isOpen}
                onClick={props.onClick}
                style={props.style}
            >
                <SelectButton
                    disabled={props.disabled}
                    isOpen={isOpen}
                    {...buttonProps}
                    ref={setButtonReference}
                    type="button"
                >
                    <SelectedItem size={props.size}>
                        {(selectedItem === null ? props.placeholder : selectedItem?.label) ??
                            props.placeholder ??
                            'Select'}
                    </SelectedItem>
                    <Chevron disabled={props.disabled} isOpen={isOpen} />
                </SelectButton>
                {ReactDOM.createPortal(
                    <DropdownList
                        {...menuProps}
                        {...attributes.popper}
                        className={`${(menuProps?.className as string) ?? ''} ${attributes?.popper?.className ?? ''} ${
                            props.itemClass
                        }`}
                        isOpen={isOpen}
                        maxItems={props.maxItems}
                        ref={setMenuReference}
                        style={{
                            ...styles.popper,

                            width:
                                props.applySameWidthModifier === false
                                    ? undefined
                                    : parseFloat((styles.popper as any)?.width) + 2,
                            zIndex: 9999,
                        }}
                    >
                        {props.items.map((item, index) => {
                            const { itemClassName, ...itemProps } = getItemProps({ index, item });

                            return (
                                <ListItem
                                    {...itemProps}
                                    className={`${itemClassName as string} ${props.itemClass}`}
                                    hovered={index === highlightedIndex}
                                    key={`item-${index}`}
                                    size={props.size}
                                    title={item.label}
                                >
                                    {item.label}
                                </ListItem>
                            );
                        })}
                    </DropdownList>,
                    document.body
                )}
            </Wrapper>
        </Tooltip>
    );
}

export default Select;
