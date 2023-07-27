/**
 * Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
 *
 * Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
 *
 * As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
 * use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
 */
import { GraphApi } from '@shared/use-causal-graph-editor';
import { GraphState } from '@types';

import { ColumnWrapper } from '../styled';
import LabelEditor from './label-editor';

export interface NodeInfoContentProps {
    /** Graph API */
    api: GraphApi;
    /** Currently selected node */
    selectedNode: string;
    /** Graph data  */
    state: GraphState;
}

/**
 * Content of the editor frame info panel related to the selected node.
 */
function NodeInfoContent(props: NodeInfoContentProps): JSX.Element {
    const nodeAttributes = props.state.graph.getNodeAttributes(props.selectedNode);

    return (
        <ColumnWrapper>
            <LabelEditor node={nodeAttributes} onLabelChange={props.api.renameNode} />
        </ColumnWrapper>
    );
}

export default NodeInfoContent;
