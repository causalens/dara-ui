import { UseComboboxState, UseComboboxStateChangeTypes, useCombobox } from 'downshift';
import { useEffect, useMemo, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { usePopper } from 'react-popper';

import styled, { DefaultTheme, useTheme } from '@darajs/styled-components';

import Badge from '../badge/badge';
import { ChevronButton, Input, InputWrapper, NoItemsLabel, Wrapper } from '../combo-box/combo-box';
import { InteractiveComponentProps, Item } from '../types';
import { Chevron, List, ListItem, sameWidthModifier } from '../utils';

const { stateChangeTypes } = useCombobox;

const ListWrapper = styled(List)`
    margin-left: -1px;
    border-radius: 0px 0px 0.25rem 0.25rem;
    box-shadow: ${(props) => props.theme.shadow.light};
`;

interface ListSpanProps {
    heading?: boolean;
    hovered?: boolean;
    section?: string;
    selected?: boolean;
}

const getTextColor = (heading: boolean, selected: boolean, theme: DefaultTheme): string => {
    if (heading) {
        return theme.colors.text;
    }
    if (selected) {
        return theme.colors.primary;
    }
    return theme.colors.text;
};

const ListItemSpan = styled(ListItem)<ListSpanProps>`
    cursor: ${(props) => (props?.heading ? 'text' : 'pointer')};
    user-select: ${(props) => (props?.heading ? 'text' : 'none')};

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: ${(props) => (props?.heading || !props.section ? '0 0.7rem' : '0 1.5rem')};
    padding-right: 0.7rem;

    font-weight: ${(props) => (props?.heading ? 'bold' : 'normal')};
    color: ${(props) => getTextColor(props?.heading, props.selected, props.theme)};

    ${(props) => {
        if (props.heading) {
            return `
                :hover {
                    background-color: ${props.theme.colors.background};
                    color: ${props.theme.colors.text};
                }
            `;
        }
    }}
`;

function instanceOfSectionItem(item: Item | ListSection): item is ListSection {
    return 'items' in item;
}

function unpackSectionedList(listItems: any): Array<ListItem> {
    return listItems.reduce((acc: Array<ListItem>, item: Item | ListSection) => {
        if (instanceOfSectionItem(item)) {
            const sectionHeading = { heading: true, label: item.label, value: item.label };
            const sectionItems = item.items.map((sectionItem: Item) => ({
                ...sectionItem,
                section: item.label,
            }));
            return [...acc, sectionHeading, ...sectionItems];
        }
        return [...acc, item];
    }, []);
}

export interface ListItem extends Item {
    heading?: boolean;
    section?: string;
}

export interface ListSection {
    items: Array<Item>;
    label: string;
}

export interface SectionedListProps extends InteractiveComponentProps<Item> {
    /** An array of ListItem and/or ListSection objects to render */
    items: Array<ListItem | ListSection>;
    /** An optional onSelect handler for listening to changes in the selected item */
    onSelect?: (item: ListItem) => void | Promise<void>;
    /** Put the component in controlled mode and pass in the selectedItem */
    selectedItem?: ListItem | Item;
    /** Pass through of style property to the root element */
    style?: React.CSSProperties;
}

/**
 * A component for rendering lists, sectioned and non-sectioned. Takes an array of unpacked  ListItem objects and
 * renders a searchable list.
 *
 * @param {SectionedListProps} props - the component props
 */
function SectionedList(props: SectionedListProps): JSX.Element {
    const theme = useTheme();

    const referenceElement = useRef<HTMLDivElement>(null);
    const popperElement = useRef<HTMLElement>(null);
    const { styles, attributes, update } = usePopper(referenceElement.current, popperElement.current, {
        modifiers: [sameWidthModifier],
        placement: 'bottom-start',
    });

    const unpackedItems = useMemo(() => unpackSectionedList(props.items), [props.items]);

    const [pendingHighlight, setPendingHighlight] = useState(null);
    const [items, setItems] = useState(unpackedItems);
    const [inputValue, setInputValue] = useState(props.selectedItem?.label ?? '');

    const {
        selectedItem,
        isOpen,
        getMenuProps,
        getInputProps,
        getToggleButtonProps,
        highlightedIndex,
        getItemProps,
        setHighlightedIndex,
    } = useCombobox<Item>({
        initialIsOpen: false,
        initialSelectedItem: props.initialValue ?? props.selectedItem,
        itemToString: (item: Item) => (item ? item.label : ''),
        items,
        onInputValueChange: (change) => {
            setInputValue(change.inputValue);

            if (!change.inputValue) {
                setItems(unpackedItems);
                return;
            }

            const counts: { [k: string]: number } = {};
            const filteredItems = unpackedItems.filter((item: ListItem) => {
                const lowercaseInput = change.inputValue.toLowerCase();
                const lowercaseLabel = item.label.toLowerCase();

                // Check if search input matches section item
                if (!item.heading && lowercaseLabel.includes(lowercaseInput)) {
                    counts[item.label] = counts[item.label] ? counts[item.label] + 1 : 1;
                    return true;
                }

                if (item.heading) {
                    // search for section headers that contain an item that matches the input
                    const listSections = props.items.filter((propItem: ListSection) =>
                        propItem.items.find((subItem) => subItem.label.toLowerCase().includes(lowercaseInput))
                    );

                    if (listSections.length) {
                        // display section headers that contain a matching item
                        listSections.forEach((section) => {
                            counts[section.label] = counts[section.label] ? counts[section.label] + 1 : 1;
                        });
                        return true;
                    }
                }

                return false;
            });

            setItems(filteredItems.filter((item) => counts[item.label] > 0));
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
        stateReducer: (state, { changes, type }): Partial<UseComboboxState<Item>> => {
            // When props is forcefully updated then clear the input as well
            if (type === stateChangeTypes.ControlledPropUpdatedSelectedItem) {
                return {
                    ...changes,
                    inputValue: '',
                };
            }

            // This resets the input when the dropdown is opened
            if (
                type === stateChangeTypes.InputFocus ||
                (type === stateChangeTypes.ToggleButtonClick && changes.isOpen)
            ) {
                // This is a hack to change the highlight in the next render cycle so filteredItems had time to update
                setPendingHighlight(
                    changes.selectedItem
                        ? props.items.findIndex((i: ListItem) => i.value === changes.selectedItem.value)
                        : 0
                );
                return {
                    ...changes,
                    inputValue: '',
                };
            }

            // On item selection make sure the list doesn't filter down to just the selected item
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
            // jump section headings when navigating with keys
            if (type === stateChangeTypes.InputKeyDownArrowUp && items[changes.highlightedIndex]?.heading) {
                return {
                    ...changes,
                    highlightedIndex:
                        changes.highlightedIndex - 1 < 0 ? items.length - 1 : changes.highlightedIndex - 1,
                };
            }
            if (type === stateChangeTypes.InputKeyDownArrowDown && items[changes.highlightedIndex]?.heading) {
                return {
                    ...changes,
                    highlightedIndex: changes.highlightedIndex + 1 === items.length ? 0 : changes.highlightedIndex + 1,
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
        <Wrapper
            className={props.className}
            isDisabled={props.disabled}
            isErrored={false}
            isOpen={isOpen}
            style={props.style}
        >
            <InputWrapper disabled={props.disabled} isOpen={isOpen} ref={referenceElement}>
                <Input {...getInputProps({ value: inputValue })} />
                <ChevronButton {...getToggleButtonProps()}>
                    <Chevron disabled={props.disabled} isOpen={isOpen} />
                </ChevronButton>
            </InputWrapper>
            {ReactDOM.createPortal(
                <ListWrapper
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
                    {items.length > 0 &&
                        items.map((item: ListItem, index: number) => {
                            const itemProps = getItemProps({ index, item });
                            if (item.heading) {
                                delete itemProps.onClick;
                            }
                            return (
                                <ListItemSpan
                                    {...itemProps}
                                    heading={item.heading}
                                    hovered={index === highlightedIndex}
                                    key={`item-${index}`}
                                    section={item.section}
                                    selected={item.value === selectedItem?.value}
                                    title={item.label}
                                >
                                    {item.label || item.section}
                                    {item.badge && (
                                        <Badge color={item.badge.color || theme.colors.primary}>
                                            {item.badge.label}
                                        </Badge>
                                    )}
                                </ListItemSpan>
                            );
                        })}
                    {items.length === 0 && <NoItemsLabel>No Items</NoItemsLabel>}
                </ListWrapper>,
                document.body
            )}
        </Wrapper>
    );
}

export default SectionedList;
