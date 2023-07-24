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
