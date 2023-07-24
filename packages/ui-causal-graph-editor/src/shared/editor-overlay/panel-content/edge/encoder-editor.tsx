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
