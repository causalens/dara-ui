/**
* Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
*
* Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
*
* As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
* use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
*/
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
