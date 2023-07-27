/**
* Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
*
* Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
*
* As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
* use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
*/
import isEqual from 'lodash/isEqual';

import styled from '@darajs/styled-components';

import Select from '../../select/select';
import { Item } from '../../types';
import { EditCellProps } from './edit-cell-utils';

const SelectWrapper = styled.div`
    display: flex;
    width: calc(100% + 22px);
    margin: 0 -1rem;
`;

const ValueWrapper = styled.span`
    display: flex;
    flex: 1 1 auto;
    align-items: center;
    height: 100%;
`;

/**
 * The edit select cell can be used to make all the cells of a particular column editable with a select field to
 * constrain the options you can choose from. When using an editable cell then an onChange handler should be added to
 * the main table component as well to listen for any updates. The onChange handler will be called with the value, row
 * index and column id, but it will not update the data for you. You need to update the data and pass it back in to the
 * component.
 */
function EditSelectCell<T extends Item>(items: Array<T>): (props: EditCellProps<T>) => JSX.Element {
    return function SelectCell(props: EditCellProps<T>): JSX.Element {
        const selectedItem = items.find((item) => item.value === props.value);

        if (isEqual(props.currentEditCell, [props.rowIdx, props.column.id])) {
            const onSelect = (item: Item): void => {
                if (props.onChange && item.value !== props.value) {
                    props.onChange(item.value, props.rowIdx, props.column.id);
                }
                props.onStopEdit();
            };

            return (
                <SelectWrapper>
                    <Select
                        initialIsOpen
                        initialValue={selectedItem}
                        items={items}
                        onSelect={onSelect}
                        style={{ flex: '1 1 auto' }}
                    />
                </SelectWrapper>
            );
        }

        return (
            <ValueWrapper data-cell={[props.rowIdx, props.column.id]} onClick={props.onStartEdit}>
                {selectedItem ? selectedItem.label : ''}
            </ValueWrapper>
        );
    };
}

export default EditSelectCell;
