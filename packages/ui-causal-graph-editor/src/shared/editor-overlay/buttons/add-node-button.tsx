import { useContext } from 'react';

import { Tooltip } from '@darajs/ui-components';
import { Plus } from '@darajs/ui-icons';

import PointerContext from '@shared/pointer-context';

import { EditorMode } from '../../../types';
import { useSettings } from '../../settings-context';
import { FloatingButton } from '../floating-elements';

interface EditControlsProps {
    /** Handler for adding a new node */
    onAddNode: () => void;
}

function EditControls(props: EditControlsProps): JSX.Element {
    const { disableLatentNodeAdd, editorMode, editable } = useSettings();
    const { disablePointerEvents } = useContext(PointerContext);

    return (
        <>
            {editable && editorMode !== EditorMode.EDGE_ENCODER && !disableLatentNodeAdd && (
                <Tooltip content="Add Latent Node" placement="bottom">
                    <FloatingButton
                        aria-label="Add Latent Node"
                        disableEvents={disablePointerEvents}
                        fixedSize
                        onClick={props.onAddNode}
                    >
                        <Plus />
                    </FloatingButton>
                </Tooltip>
            )}
        </>
    );
}

export default EditControls;
