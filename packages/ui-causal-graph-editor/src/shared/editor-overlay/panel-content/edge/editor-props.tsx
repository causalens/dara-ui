/**
 * Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
 *
 * Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
 *
 * As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
 * use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
 */
import { GraphApi } from '@shared/use-causal-graph-editor';
import { EdgeConstraintItem, SimulationEdge } from '@types';

export interface EdgeEditorProps {
    /** Graph API */
    api: GraphApi;
    /** The edge meta data */
    edge: SimulationEdge;
    /** Edge constraint for the specific edge */
    edgeConstraint: EdgeConstraintItem;
    /** Handler called when the type of the constraint is updated */
    onUpdateConstraint: (constraint: EdgeConstraintItem) => void | Promise<void>;
    /** The id of the source node */
    source: string;
    /** The id of the target node */
    target: string;
}
