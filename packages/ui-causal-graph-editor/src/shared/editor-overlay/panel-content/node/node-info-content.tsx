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
