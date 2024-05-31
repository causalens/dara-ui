
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
    items: Item[];
    getItemProps: (options: UseComboboxGetItemPropsOptions<Item>) => any
    getFloatingProps: (userProps?: React.HTMLProps<HTMLElement>) => Record<string, unknown>;
    style: React.CSSProperties;
    isOpen: boolean;
    size?: number;
    setFloating: (node: HTMLElement | null) => void;
    getMenuProps?: (
        options?: UseComboboxGetMenuPropsOptions,
        otherOptions?: GetPropsCommonOptions,
    ) => any;
    maxItems?: number;
    itemClass?: string;
    className?: string;
    children?: (item: Item, index: number) => React.ReactNode;
}

const DropdownList = ({
    items,
    getItemProps,
    getFloatingProps,
    isOpen,
    getMenuProps,
    size,
    setFloating,
    style,
    maxItems,
    itemClass,
    className,
    children
}: Props): JSX.Element => <StyledDropdownList
    {...(getMenuProps ? getMenuProps({ ref: setFloating }) : { ref: setFloating })}
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
    </StyledDropdownList>
DropdownList.displayName = 'DropdownList';

export default React.memo(DropdownList);
