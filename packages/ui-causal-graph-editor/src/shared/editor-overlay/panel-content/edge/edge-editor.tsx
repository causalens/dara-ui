/**
* Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
*
* Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
*
* As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
* use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
*/
import { useSettings } from '@shared/settings-context';
import { EditorMode } from '@types';

import { ColumnWrapper } from '../styled';
import { EdgeEditorProps } from './editor-props';
import EncoderEditor from './encoder-editor';
import PagEditor from './pag-editor';
import ResolverEditor from './resolver-editor';

const EditorComponentMap: Record<EditorMode, (props: EdgeEditorProps) => JSX.Element> = {
    [EditorMode.DEFAULT]: null,
    [EditorMode.EDGE_ENCODER]: EncoderEditor,
    [EditorMode.RESOLVER]: ResolverEditor,
    [EditorMode.PAG_VIEWER]: PagEditor,
};

/**
 * Component for editing an editor
 * Displays a specialized editor based on the current editor mode
 */
function EdgeEditor(props: EdgeEditorProps): JSX.Element {
    const { editorMode } = useSettings();

    const EditorComponent = EditorComponentMap[editorMode];

    return <ColumnWrapper>{EditorComponent && <EditorComponent {...props} />}</ColumnWrapper>;
}

export default EdgeEditor;
