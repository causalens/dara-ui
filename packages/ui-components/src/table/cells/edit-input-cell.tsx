/**
* Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
*
* Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
*
* As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
* use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
*/
import isEqual from 'lodash/isEqual';
import { useEffect, useState } from 'react';

import styled from '@darajs/styled-components';

import Input from '../../input/input';
import { EditCellProps } from './edit-cell-utils';

const InputWrapper = styled.div`
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
 * The edit input cell can be used to make all the cells of a particular column editable with an input field. When using
 * an editable cell then an onChange handler should be added to the main table component as well to listen for any
 * updates. The onChange handler will be called with the value, row index and column id, but it will not update the data
 * for you. You need to update the data and pass it back in to the component.
 */
function EditInputCell(): (props: EditCellProps<string>) => JSX.Element {
    return function InputCell(props: EditCellProps<string>): JSX.Element {
        const [value, setValue] = useState(props.value);
        useEffect(() => {
            setValue(props.value);
        }, [props.value]);

        if (isEqual(props.currentEditCell, [props.rowIdx, props.column.id])) {
            const onComplete = (): void => {
                if (props.onChange && value !== props.value) {
                    props.onChange(value, props.rowIdx, props.column.id);
                }
                props.onStopEdit();
            };

            const onChange = (val: string): void => {
                setValue(val);
            };

            return (
                <InputWrapper>
                    <Input
                        autoFocus
                        initialValue={props.value}
                        onBlur={onComplete}
                        onChange={onChange}
                        onComplete={onComplete}
                        style={{ maxWidth: '100%' }}
                    />
                </InputWrapper>
            );
        }

        return (
            <ValueWrapper data-cell={[props.rowIdx, props.column.id]} onClick={props.onStartEdit}>
                {props.value}
            </ValueWrapper>
        );
    };
}

export default EditInputCell;
