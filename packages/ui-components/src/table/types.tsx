/**
 * Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
 *
 * Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
 *
 * As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
 * use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
 */
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
