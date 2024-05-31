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
import { Placement, autoUpdate, flip, offset, shift, useFloating, useInteractions, useRole } from '@floating-ui/react';
import { GetPropsCommonOptions, UseSelectGetToggleButtonPropsOptions, useSelect } from 'downshift';
import { useEffect, useState } from 'react';
import * as React from 'react';
import ReactDOM from 'react-dom';

import styled from '@darajs/styled-components';

import DropdownList from '../shared/dropdown-list';
import ListItem from '../shared/list-item';
import Tooltip from '../tooltip/tooltip';
import { InteractiveComponentProps, Item } from '../types';
import { Chevron } from '../utils';

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
    padding: 0 0.5rem 0 1rem;

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
    padding: 0 0.25rem;

    font-size: 0.875rem;
    color: ${(props) => props.theme.colors.text};

    background-color: ${(props) => props.theme.colors.grey1};
    border-radius: 0.25rem;

    :hover:enabled {
        background-color: ${(props) => props.theme.colors.grey2};
    }

    svg {
        width: 1rem !important;
        height: 0.8rem;
        margin-left: 0.5rem !important;
    }

    :disabled {
        color: ${(props) => props.theme.colors.grey2};

        svg {
            color: ${(props) => props.theme.colors.grey2};
        }
    }
`;

interface DatepickerListItemStyleProps {
    isSelected?: boolean;
    size?: number;
}

const StyledDatepickerListItem = styled(ListItem)<DatepickerListItemStyleProps>`
    display: flex;
    align-items: center;

    padding: 0.25rem 1.5rem;

    font-size: ${(props) => (props.size ? `${props.size}rem` : props.theme.font.size)};
    color: ${(props) => (props.isSelected ? '#FFF' : props.theme.colors.text)};

    background-color: ${(props) => {
        if (props.isSelected) {
            return props.theme.colors.primary;
        }
        return props.theme.colors.grey1;
    }};

    :active {
        background-color: ${(props) => props.theme.colors.grey1};
    }
`;

type DatepickerListItemProps = {
    item: Item;
    index: number;
    getItemProps: (options: any) => any;
    isSelected: boolean;
    size?: number;
};

const DatepickerListItem = React.memo(({ item, index, getItemProps, isSelected, size }: DatepickerListItemProps) => (
    <StyledDatepickerListItem
        getItemProps={getItemProps}
        isSelected={isSelected}
        key={`item-${index}`}
        title={item.label}
        item={item}
        index={index}
        size={size}
    >
        {item.label}
    </StyledDatepickerListItem>
));

interface DropdownListProps {
    displacement: number;
}

const StyledDropdownList = React.memo(styled(DropdownList)<DropdownListProps>`
    overflow-y: auto;
    display: ${(props) => (props.isOpen ? 'flex' : 'none')};
    flex-direction: column;
    gap: 0.125rem;

    width: 16.25rem;
    max-height: calc(${(props) => (props.maxItems || 5) * 2}em + 2px);
    margin-left: ${(props) => props.displacement}rem;

    background-color: ${(props) => props.theme.colors.grey1};
    border: none;
`);

const DatepickerSelectButtonPrimary = React.memo(
    ({
        disabled,
        getToggleButtonProps,
        setReference,
        getReferenceProps,
        size,
        isOpen,
        selectedItem,
    }: {
        disabled: boolean;
        size: number;
        isOpen: boolean;
        selectedItem: Item;
        getToggleButtonProps: (
            options?: UseSelectGetToggleButtonPropsOptions,
            otherOptions?: GetPropsCommonOptions
        ) => Record<string, unknown>;
        setReference: (node: any) => void;
        getReferenceProps: (userProps?: React.HTMLProps<Element>) => Record<string, unknown>;
    }): JSX.Element => (
        <SelectButtonPrimary
            disabled={disabled}
            {...getToggleButtonProps({ disabled, ref: setReference })}
            {...getReferenceProps()}
            type="button"
        >
            <SelectedItem size={size}>{selectedItem ? selectedItem.label : 'Select'}</SelectedItem>
            <Chevron disabled={disabled} isOpen={isOpen} />
        </SelectButtonPrimary>
    )
);

export interface SelectProps extends InteractiveComponentProps<Item> {
    /** The left displacement from dropdown the items should show */
    displacement?: number;
    /** A function taking an element for the ref of the dropdown  */
    dropdownRef?: (element: any) => void;
    /** className property to put on the select's items and the item wrapper */
    itemClass?: string;
    /** The items to pick from the list. Each should have a label and a value */
    items: Array<Item>;
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
    const [pendingHighlight, setPendingHighlight] = useState(null);

    const { isOpen, selectedItem, getToggleButtonProps, getMenuProps, getItemProps, setHighlightedIndex } =
        useSelect<Item>({
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

    const { refs, floatingStyles, context } = useFloating<HTMLElement>({
        open: isOpen,
        placement: props.placement || 'bottom-start',
        middleware: [offset(8), flip(), shift()],
        whileElementsMounted: isOpen ? autoUpdate : undefined,
    });

    const role = useRole(context, { role: 'listbox' });
    const { getReferenceProps, getFloatingProps } = useInteractions([role]);

    const setFloatingRef = refs.setFloating;
    const { dropdownRef } = props;
    const mergedDropdownRef = React.useCallback(
        (node: HTMLElement | null) => {
            setFloatingRef(node);
            dropdownRef?.(node);
        },
        [setFloatingRef, dropdownRef]
    );
    const menuProps = React.useMemo(() => getMenuProps({ ref: mergedDropdownRef }), [mergedDropdownRef, getMenuProps]);

    const renderListItem = React.useCallback(
        (item: Item, index: number) => (
            <DatepickerListItem
                item={item}
                index={index}
                getItemProps={getItemProps}
                isSelected={selectedItem?.value === item.value}
            />
        ),
        [getItemProps, selectedItem]
    );

    return (
        <Tooltip content={props.errorMsg} disabled={!props.errorMsg} styling="error">
            <Wrapper
                className={props.className}
                isDisabled={props.disabled}
                isErrored={!!props.errorMsg}
                onClick={props.onClick}
                style={props.style}
            >
                <DatepickerSelectButtonPrimary
                    disabled={props.disabled}
                    getToggleButtonProps={getToggleButtonProps}
                    setReference={refs.setReference}
                    getReferenceProps={getReferenceProps}
                    size={props.size}
                    isOpen={isOpen}
                    selectedItem={selectedItem}
                />
                {ReactDOM.createPortal(
                    <StyledDropdownList
                        items={props.items}
                        getItemProps={getItemProps}
                        getFloatingProps={getFloatingProps}
                        style={floatingStyles}
                        isOpen={isOpen}
                        getMenuProps={getMenuProps}
                        size={props.size}
                        className={`${menuProps?.className ?? ''} ${props.itemClass}`}
                        itemClass={props.itemClass}
                        displacement={props.displacement}
                        maxItems={7}
                        ref={mergedDropdownRef}
                    >
                        {renderListItem}
                    </StyledDropdownList>,
                    document.body
                )}
            </Wrapper>
        </Tooltip>
    );
}

export default DatepickerSelect;
