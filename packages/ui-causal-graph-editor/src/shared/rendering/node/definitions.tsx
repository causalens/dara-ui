/**
* Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
*
* Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
*
* As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
* use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
*/
import { DefaultTheme } from '@darajs/styled-components';

import { NodeGroup } from '../../../types';

export const BORDER_PADDING = 2;

/**
 * Defines complete set of information used to determine node visuals
 */
export interface PixiNodeStyle {
    /** Node background color */
    color?: string;
    /** The group node belongs to */
    group: NodeGroup;
    /** Border/shadow color */
    highlight_color?: string;
    /** Whether there is a edge currently selected */
    isEdgeSelected: boolean;
    /** Whether there is a new edge being created from this node */
    isSourceOfNewEdge: boolean;
    /** Node text */
    label: string;
    /** Node text color */
    label_color?: string;
    /** Node text font size */
    label_size?: number;
    /** Node size */
    size: number;
    /** Current node state */
    state: NodeState;
    /** Current theme object */
    theme: DefaultTheme;
}

/**
 * Current node state
 */
export interface NodeState {
    /** Whether an edge connected to the node is selected */
    attachedEdgeSelected: boolean;
    hover: boolean;
    matched: boolean;
    selected: boolean;
}
