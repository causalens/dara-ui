/**
* Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
*
* Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
*
* As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
* use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
*/
import { ButtonBar, Item, Tooltip } from '@darajs/ui-components';
import { ArrowRightLong, ArrowsHorizontal, Ban } from '@darajs/ui-icons';

import { EdgeConstraintItem, EdgeConstraintType } from '@types';

import { ColumnWrapper, SectionTitle } from '../../styled';

// Items should technically have label be a string but ButtonBar just renders the label
// so we're putting a component for it to render instead
interface IconItem {
    label: string | JSX.Element;
    value: any;
}

const constraintItems: IconItem[] = [
    {
        label: (
            <Tooltip content="Undirected">
                <span>
                    <ArrowsHorizontal size="lg" />
                </span>
            </Tooltip>
        ),
        value: EdgeConstraintType.UNDIRECTED,
    },
    {
        label: (
            <Tooltip content="Directed">
                <span>
                    <ArrowRightLong size="lg" />
                </span>
            </Tooltip>
        ),
        value: EdgeConstraintType.DIRECTED,
    },
    {
        label: (
            <Tooltip content="Forbidden">
                <span>
                    <Ban size="lg" />
                </span>
            </Tooltip>
        ),
        value: EdgeConstraintType.FORBIDDEN,
    },
];

export interface ConstraintEditorProps {
    /**
     * Edge constraint for the specific edge
     */
    edgeConstraint?: EdgeConstraintItem;
    /**
     * Handler called when the type of the constraint is updated
     */
    onUpdate: (constraint: EdgeConstraintItem) => void | Promise<void>;
    /**
     * Source of the selected edge
     */
    source: string;
    /**
     * Target of the selected edge
     */
    target: string;
}

/**
 * ConstraintEditor component represents a constraint related to a specific edge.
 * It should be displayed inside the EditorFrame's sidebar to allow the user to
 * specify a constraint type & type of relationship.
 */
function ConstraintEditor(props: ConstraintEditorProps): JSX.Element {
    function updateConstraintType(constraintType: EdgeConstraintItem['type']): void {
        props.onUpdate({
            id: props.edgeConstraint.id,
            source: props.source,
            target: props.target,
            type: constraintType,
        });
    }

    return (
        <ColumnWrapper>
            <SectionTitle>Connection</SectionTitle>
            <ButtonBar
                initialValue={constraintItems.find((i) => i.value === props.edgeConstraint.type) as Item}
                items={constraintItems as any}
                key={props.edgeConstraint.id}
                onSelect={(e) => updateConstraintType(e.value)}
                styling="secondary"
            />
        </ColumnWrapper>
    );
}

export default ConstraintEditor;
