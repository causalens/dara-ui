import { ColumnInterface, Renderer } from 'react-table';

import { ActionCol } from './cells/action-cell';

// eslint-disable-next-line @typescript-eslint/ban-types
export interface TableColumn extends ColumnInterface<object> {
    // These are vague as the type we use doesn't exactly match the react-table type, we inject a few
    // global properties into the options; should be fixed once we upgrade to v8
    Cell?: Renderer<any>;
    Header?: Renderer<any>;
    accessor: string;
    actions?: Array<ActionCol>;
    align?: string;
    filter?: 'text' | 'categorical' | 'numeric' | 'datetime';
    sortKey?: string;
    sticky?: string;
    tooltip?: string;
}
