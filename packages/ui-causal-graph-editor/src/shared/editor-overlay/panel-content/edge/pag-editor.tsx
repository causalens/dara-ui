import { EdgeEditorProps } from './editor-props';
import { EdgeTypeEditor } from './sections';

/**
 * EdgeEditor for PAG EditorMode
 */
function PagEditor(props: EdgeEditorProps): JSX.Element {
    return (
        <>
            <EdgeTypeEditor api={props.api} edge={props.edge} source={props.source} target={props.target} />
        </>
    );
}

export default PagEditor;
