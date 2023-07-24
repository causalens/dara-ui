import { Button } from '@darajs/ui-components';

import { useSettings } from '@shared/settings-context';
import { EdgeType, EditorMode } from '@types';

import { ColumnWrapper } from '../styled';
import { EdgeEditorProps } from './editor-props';

/**
 * EdgeEditor for RESOLVER_BASIC and RESOLVER_ADVANCED EditorMode
 */
function ResolverEditor(props: EdgeEditorProps): JSX.Element {
    const { editorMode } = useSettings();

    return (
        <ColumnWrapper $fillHeight $gap={2}>
            {editorMode === EditorMode.RESOLVER &&
                !(
                    props.edge['meta.rendering_properties.accepted'] || props.edge['meta.rendering_properties.forced']
                ) && (
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Button
                            disabled={props.edge.edge_type !== EdgeType.DIRECTED_EDGE}
                            onClick={() => props.api.acceptEdge([props.source, props.target])}
                            style={{ width: 'max-content' }}
                        >
                            Accept Edge
                        </Button>
                    </div>
                )}
        </ColumnWrapper>
    );
}

export default ResolverEditor;
