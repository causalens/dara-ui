/**
* Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
*
* Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
*
* As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
* use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
*/
import * as React from 'react';

/** Interface is very loose because react table basically lets anything go through here */
export interface EditCellProps<T> {
    cell: any;
    column: any;
    currentEditCell?: [number, string | number];
    data: any;
    onAction: (actionId: string, row: any) => void | Promise<void>;
    onChange: (value: T, rowIdx: number, colId: string) => void | Promise<void>;
    onStartEdit: (e?: React.SyntheticEvent<HTMLSpanElement>) => void | Promise<void>;
    onStopEdit: () => void | Promise<void>;
    row: any;
    rowIdx: number;
    value: any;
}
