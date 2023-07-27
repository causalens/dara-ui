/**
 * Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
 *
 * Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
 *
 * As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
 * use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
 */
import { useSettings } from '@shared/settings-context';
import { GraphApi } from '@shared/use-causal-graph-editor';
import { EdgeConstraintItem, GraphState } from '@types';

import { ColumnWrapper } from '../styled';
import EdgeEditor from './edge-editor';
import DescriptionEditor from './sections/description-editor';
import DirectionEditor from './sections/direction-editor';

export interface EdgeInfoContentProps {
    /** Graph API */
    api: GraphApi;
    /** Handler to confirm/reverse currently selected edge */
    onConfirmDirection: (reverse: boolean) => void;
    /** Handler to update a given constraint */
    onUpdateConstraint: (constraint: EdgeConstraintItem) => void | Promise<void>;
    /** Constraint related to the edge */
    selectedConstraint?: EdgeConstraintItem;
    /** Currently selected edge */
    selectedEdge: [string, string];
    /** Graph data  */
    state: GraphState;
}

/**
 * Content of the editor frame info panel related to the selected edge.
 */
function EdgeInfoContent(props: EdgeInfoContentProps): JSX.Element {
    const { editable } = useSettings();

    const [source, target] = props.selectedEdge;
    const edgeAttributes = props.state.graph.getEdgeAttributes(source, target);
    const sourceAttributes = props.state.graph.getNodeAttributes(source);
    const targetAttributes = props.state.graph.getNodeAttributes(target);

    return (
        <>
            <DirectionEditor
                edgeType={edgeAttributes.edge_type}
                onConfirmDirection={props.onConfirmDirection}
                source={sourceAttributes['meta.rendering_properties.label'] ?? source}
                target={targetAttributes['meta.rendering_properties.label'] ?? target}
            />

            <ColumnWrapper $gap={1} $scrollable>
                {(editable || edgeAttributes['meta.rendering_properties.description']) && (
                    <DescriptionEditor api={props.api} edge={edgeAttributes} selectedEdge={props.selectedEdge} />
                )}
                {editable && (
                    <EdgeEditor
                        api={props.api}
                        edge={edgeAttributes}
                        edgeConstraint={props.selectedConstraint}
                        onUpdateConstraint={props.onUpdateConstraint}
                        source={source}
                        target={target}
                    />
                )}
            </ColumnWrapper>
        </>
    );
}

export default EdgeInfoContent;
