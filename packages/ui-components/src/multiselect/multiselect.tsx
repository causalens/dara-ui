import { UseMultipleSelectionStateChange, useCombobox, useMultipleSelection } from 'downshift';
import { useCallback, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { usePopper } from 'react-popper';

import styled from '@darajs/styled-components';
import { Cross } from '@darajs/ui-icons';

import Button from '../button/button';
import Tooltip from '../tooltip/tooltip';
import { InteractiveComponentProps, Item } from '../types';
import { Chevron, List, ListItem, sameWidthModifier } from '../utils';

const { stateChangeTypes } = useCombobox;

interface WrapperProps {
    isDisabled?: boolean;
    isOpen: boolean;
    maxRows: number;
    maxWidth?: string;
}

const tagHeight = 2;
const tagTopMargin = 0.5;

const Wrapper = styled.div<WrapperProps>`
    display: inline-flex;
    ${(props) => {
        if (props.isDisabled) {
            return `
                cursor: not-allowed;
            `;
        }
    }}

    width: 100%;
    max-width: ${(props) => props.maxWidth};
    max-height: ${(props) => props.maxRows * (tagHeight + tagTopMargin)}rem;

    border-radius: ${(props) => (props.isOpen ? '0.25rem 0.25rem 0rem 0rem' : '0.25rem')};
`;

interface InputWrapperProps {
    isDisabled?: boolean;
    isErrored?: boolean;
    isOpen?: boolean;
}

const InputWrapper = styled.div<InputWrapperProps>`
    display: flex;
    flex: 1 1 auto;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    min-width: 10rem;
    min-height: 2.5rem;
    margin-right: 0.25rem;
    padding: 0.25rem 0.5rem 0.25rem 1rem;

    color: ${(props) => (props.isDisabled ? props.theme.colors.grey2 : props.theme.colors.text)};

    background-color: ${(props) => props.theme.colors.grey1};
    border: none;
    border-radius: ${(props) => (props.isOpen ? '0.25rem 0.25rem 0rem 0rem' : '0.25rem')};

    :hover {
        background-color: ${(props) => (props.isDisabled ? props.theme.colors.grey1 : props.theme.colors.grey2)};
    }

    svg {
        height: 0.8rem;
    }

    ${(props) => {
        if (props.isDisabled) {
            return `
                border: 1px solid ${props.theme.colors.grey1};

                svg {
                    color: ${props.theme.colors.grey2};
                    cursor: not-allowed;
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

interface InputProps {
    size?: number;
}

const Input = styled.input<InputProps>`
    overflow: hidden;
    flex: 1 1 auto;

    height: 100%;
    margin-right: 0.5rem;
    padding: 0rem;

    font-size: ${(props) => (props.size ? `${props.size}rem` : props.theme.font.size)};
    font-weight: 300;
    color: ${(props) => props.theme.colors.grey6};
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;

    background-color: transparent;
    border: none;
    outline: 0;

    :disabled {
        cursor: not-allowed;
    }
`;

interface TagWrapperProps {
    maxRows: number;
}

const TagWrapper = styled.div<TagWrapperProps>`
    overflow: auto;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    align-items: center;

    width: 100%;
    max-height: ${(props) => props.maxRows * (tagHeight + tagTopMargin) - 0.25}rem;
`;

interface TagProps {
    disabled?: boolean;
}

const Tag = styled.span<TagProps>`
    overflow: hidden;
    display: flex;
    align-items: center;

    height: ${tagHeight}rem;
    padding: 0 0.75rem;

    font-size: 0.875rem;
    color: ${(props) => (props.disabled ? props.theme.colors.grey3 : props.theme.colors.text)};

    background-color: ${(props) => (props.disabled ? props.theme.colors.grey3 : props.theme.colors.blue3)};
    border: 1px solid ${(props) => props.theme.colors.primary};
    border-radius: 1rem;

    svg {
        width: 0.85rem;
        height: 0.85rem;
        margin-left: 0.25rem;
        color: ${(props) => (props.disabled ? props.theme.colors.grey3 : props.theme.colors.text)};

        :hover {
            color: ${(props) => (props.disabled ? props.theme.colors.grey3 : props.theme.colors.primary)};
        }
    }
`;

const TagText = styled.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const NoItemsLabel = styled.span`
    display: flex;
    flex: 1 1 auto;
    align-items: center;
    justify-content: center;

    height: 2rem;

    font-size: 1rem;
    color: ${(props) => props.theme.colors.grey4};

    background-color: ${(props) => props.theme.colors.blue1};
`;

const DropdownList = styled(List)`
    border-radius: 0px 0px 0.25rem 0.25rem;
    outline: 0;
    box-shadow: ${(props) => props.theme.shadow.light};
`;

const ChevronButton = styled(Button).attrs((attrs) => ({ ...attrs, styling: 'ghost' }))`
    min-width: 0;
    height: auto;
    margin: 0;
    padding: 0 0.25rem;

    background-color: transparent !important;
`;

export interface MultiSelectProps extends InteractiveComponentProps<Array<Item>> {
    /** Whether to open the select dropdown on load or not, defaults to false */
    initialIsOpen?: boolean;
    /** The items to pick from the list. Each should have a label and a value */
    items: Array<Item>;
    /** An optional property for the maximum number of rows of items to show. Defaults to 3 */
    maxRows?: number;
    /** An optional max-width property in pixels or a percentage of parent. Defaults to 100% */
    maxWidth?: string;
    /** An optional onSelect handler for listening to changes in the selected item */
    onSelect?: (item: Array<Item>) => void | Promise<void>;
    /** An optional handler when the search term is changed */
    onTermChange?: (term: string) => void | Promise<void>;
    /** An optional placeholder for the input field to display when nothing is selected, defaults to '' */
    placeholder?: string;
    /** Set the selected items to a specific value, will put the component in controlled mode */
    selectedItems?: Item[];
    /** Font size in rem to show in the Select */
    size?: number;
}

/**
 * A multiselect select combobox component, accepts a list of items to select from and an onSelect handler to listen for
 * changes. Renders currently selected items as list of tags which have a cross for removing them. Component will expand
 * vertically to fit all selected items.
 *
 * @param {MultiSelectProps} props - the component props
 */
function MultiSelect({ maxWidth = '100%', maxRows = 3, ...props }: MultiSelectProps): JSX.Element {
    const referenceElement = useRef<HTMLDivElement>(null);
    const popperElement = useRef<HTMLElement>(null);
    const { styles, attributes, update } = usePopper(referenceElement.current, popperElement.current, {
        modifiers: [sameWidthModifier],
        placement: 'bottom-start',
    });

    const [inputValue, setInputValue] = useState('');

    const { getSelectedItemProps, getDropdownProps, addSelectedItem, removeSelectedItem, selectedItems } =
        useMultipleSelection({
            initialSelectedItems: props.initialValue ?? [],
            onSelectedItemsChange: (changes: UseMultipleSelectionStateChange<Item>) => {
                if (props.onSelect) {
                    props.onSelect(changes.selectedItems);
                }
                update();
            },
            // Only set the selectedItems key if it has been explicitly set in props
            ...('selectedItems' in props && { selectedItems: props.selectedItems }),
        });

    const onTermChange = useCallback((term: string) => {
        setInputValue(term);
        if (props.onTermChange) {
            props.onTermChange(term);
        }
    }, []);

    // If there is a term change function passed in then don't filter locally
    const filteredItems = props.onTermChange
        ? props.items
        : props.items.filter(
              (item) => !selectedItems.includes(item) && item.label?.toLowerCase().includes(inputValue.toLowerCase())
          );

    const { isOpen, getMenuProps, getInputProps, highlightedIndex, getItemProps, openMenu, getToggleButtonProps } =
        useCombobox<Item>({
            defaultHighlightedIndex: -1,
            initialIsOpen: props.initialIsOpen,
            inputValue,
            itemToString: (item) => item?.label || '',
            items: filteredItems,
            onStateChange: ({ inputValue: internalInputVal, selectedItem, type }: any) => {
                if (type === stateChangeTypes.InputChange) {
                    onTermChange(internalInputVal);
                }
                if (
                    [
                        stateChangeTypes.InputKeyDownEnter,
                        stateChangeTypes.ItemClick,
                        stateChangeTypes.InputBlur,
                    ].includes(type)
                ) {
                    if (selectedItem) {
                        onTermChange('');
                        addSelectedItem(selectedItem);
                    }
                }
            },
            selectedItem: null,
            stateReducer: (state, { changes, type }) => {
                if (type === stateChangeTypes.ItemClick || type === stateChangeTypes.InputKeyDownEnter) {
                    return { ...changes, isOpen: true };
                }
                return changes;
            },
        });

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
        <Wrapper
            className={props.className}
            isDisabled={props.disabled}
            isOpen={isOpen}
            maxRows={maxRows}
            maxWidth={maxWidth}
            style={props.style}
        >
            <Tooltip content={props.errorMsg} disabled={!props.errorMsg} styling="error">
                <InputWrapper isDisabled={props.disabled} isOpen={isOpen} ref={referenceElement}>
                    <TagWrapper maxRows={maxRows}>
                        {selectedItems.map((selectedItem, index) => (
                            <Tag
                                disabled={props.disabled}
                                key={selectedItem.value}
                                {...getSelectedItemProps({ index, selectedItem })}
                            >
                                <TagText>{selectedItem.label}</TagText>
                                <Cross
                                    asButton
                                    onClick={(e) => {
                                        // See https://github.com/downshift-js/downshift/issues/1188
                                        e.stopPropagation();
                                        return removeSelectedItem(selectedItem);
                                    }}
                                />
                            </Tag>
                        ))}
                        <Input
                            {...getInputProps(getDropdownProps({ preventKeyAction: isOpen }))}
                            disabled={props.disabled}
                            onFocus={openMenu}
                            placeholder={props.placeholder}
                            size={props.size}
                        />
                    </TagWrapper>
                    <ChevronButton {...getToggleButtonProps()}>
                        <Chevron disabled={props.disabled} isOpen={isOpen} />
                    </ChevronButton>
                </InputWrapper>
            </Tooltip>
            {ReactDOM.createPortal(
                <DropdownList
                    {...menuProps}
                    {...attributes.popper}
                    isOpen={isOpen}
                    ref={setMenuReference}
                    style={{
                        ...styles.popper,

                        width: parseFloat((styles.popper as any)?.width),
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
    );
}

export default MultiSelect;
