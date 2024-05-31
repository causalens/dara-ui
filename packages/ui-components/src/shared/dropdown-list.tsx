
import styled from '@darajs/styled-components';
import ListItem from "./list-item";
import { List, NoItemsLabel } from '../utils/list-styles';
import React from 'react';
import { UseComboboxGetMenuPropsOptions, GetPropsCommonOptions, UseComboboxGetItemPropsOptions } from 'downshift';
import { isEmpty } from 'lodash';
import { Item } from '../types';

const StyledDropdownList = styled(List)`
    border-radius: 0 0 0.25rem 0.25rem;
    outline: 0;
    box-shadow: ${(props) => props.theme.shadow.light};
`;

type Props = {
    /** Array of items to display in the dropdown */
    items: Item[];
    /** Function to get props for an item */
    getItemProps: (options: UseComboboxGetItemPropsOptions<Item>) => any;
    /** Function to get props for the floating element */
    getFloatingProps: (userProps?: React.HTMLProps<HTMLElement>) => Record<string, unknown>;
    /** Style object to customize the dropdown list */
    style: React.CSSProperties;
    /** Boolean to indicate if the dropdown is open */
    isOpen: boolean;
    /** Optional size for the list items */
    size?: number;
    /** Function to get props for the menu. */
    getMenuProps?: (
        options?: UseComboboxGetMenuPropsOptions,
        otherOptions?: GetPropsCommonOptions,
    ) => any;
    /** Maximum number of items to display in the dropdown */
    maxItems?: number;
    /** CSS classname for individual items */
    itemClass?: string;
    /** CSS classname for the dropdown list */
    className?: string;
    /** Optional function to render custom children. By default, it renders the ListItem with the item label */
    children?: (item: Item, index: number) => React.ReactNode;
}

/**
 * DropdownList component to display a list of items in a dropdown.
 * 
 * @param {Props} props - The props for the component
 */
const DropdownList = React.forwardRef<any, Props>((
    {
        items,
        getItemProps,
        getFloatingProps,
        isOpen,
        getMenuProps,
        size,
        style,
        maxItems,
        itemClass,
        className,
        children
    },
    ref
): JSX.Element => <StyledDropdownList
    {...(getMenuProps ? getMenuProps({ ref }) : { ref })} // Merge the refs conditionally
    {...getFloatingProps()}
    isOpen={isOpen}
    maxItems={maxItems}
    style={{
        ...style,
        zIndex: 9999,
    }}
    className={className}
>
        {!isEmpty(items) ? items.map((item, index) => children ? children(item, index) : <ListItem
            getItemProps={getItemProps}
            key={`item-${index}`}
            size={size}
            title={item.label}
            item={item}
            index={index}
            itemClass={itemClass}
        >
            {item.label}
        </ListItem>) : <NoItemsLabel>No Items</NoItemsLabel>}
    </StyledDropdownList>)
DropdownList.displayName = 'DropdownList';

export default React.memo(DropdownList);
