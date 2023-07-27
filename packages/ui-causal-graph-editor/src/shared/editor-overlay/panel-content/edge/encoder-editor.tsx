/**
 * Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
 *
 * Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
 *
 * As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
 * use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
 */
import { EdgeEditorProps } from './editor-props';
import { ConstraintEditor } from './sections';

/**
 * Edge Editor for EdgeEncoder EditorMode
 */
function EncoderEditor(props: EdgeEditorProps): JSX.Element {
    return (
        <>
            <ConstraintEditor
                edgeConstraint={props.edgeConstraint}
                onUpdate={props.onUpdateConstraint}
                source={props.source}
                target={props.target}
            />
        </>
    );
}

export default EncoderEditor;
