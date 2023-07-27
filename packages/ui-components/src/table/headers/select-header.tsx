/**
 * Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
 *
 * Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
 *
 * As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
 * use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
 */
import TriStateCheckbox, { CheckboxState } from '../../checkbox/tri-state-checkbox';
import { Action } from '../cells/action-cell';

interface selectHeaderProps {
    /** An action handler, will be called for selecting/unselecting all rows */
    onAction: (actionId: string, input?: any) => void | Promise<void>;
    /** The rows of the table, needed to keep track of them being selected or not */
    rows: any;
}

/**
 * A table header with a tri-state checkbox, for bulk selection actions
 *
 * @param {selectHeaderProps} props - the component props
 */
function SelectHeader(props: selectHeaderProps): JSX.Element {
    const allValues = props.rows.map((r: any) => r.original.selected);
    const countSelected = allValues.filter(Boolean).length;

    const allSelected = countSelected > 0 && countSelected === allValues.length;
    const noneSelected = countSelected === 0;

    const onChange = (state: CheckboxState): void => {
        if (state === CheckboxState.UNCHECKED) {
            props.onAction(Action.UNSELECT_ALL);
        } else if (state === CheckboxState.CHECKED) {
            props.onAction(
                Action.SELECT_ALL,
                props.rows.map((r: any) => r.original)
            );
        }
    };
    return (
        <TriStateCheckbox
            allSelected={allSelected}
            noneSelected={noneSelected}
            onChange={onChange}
            style={{ display: 'flex', justifyContent: 'center' }}
        />
    );
}

export default SelectHeader;
