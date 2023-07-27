/**
* Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
*
* Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
*
* As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
* use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
*/
import React, { useEffect, useMemo, useState } from 'react';

export type DragMode = 'create_edge' | 'move_node';

/**
 * Helper hook controlling switching and enabling drag mode
 *
 * @param editMode whether app is in edit mode
 * @param allowEdgeAdd whether to allow adding edges
 * @param allowNodeDrag whether to allow node dragging
 * @param onDragModeChange callback to execute whenever drag mode changes
 */
function useDragMode(
    editMode: boolean,
    allowEdgeAdd: boolean,
    allowNodeDrag: boolean,
    onDragModeChange: (dragMode: DragMode | null) => void
): { dragEnabled: boolean; dragMode: DragMode; setDragMode: React.Dispatch<React.SetStateAction<DragMode>> } {
    const [dragMode, setDragMode] = useState<DragMode>(() => {
        if (editMode && allowEdgeAdd) {
            return 'create_edge';
        }

        return allowNodeDrag ? 'move_node' : null;
    });
    const dragEnabled = useMemo(() => {
        if (dragMode === 'create_edge') {
            return editMode && allowEdgeAdd;
        }

        if (dragMode === 'move_node') {
            return allowNodeDrag;
        }

        return false;
    }, [dragMode, editMode, allowEdgeAdd]);

    useEffect(() => {
        if (!dragEnabled) {
            onDragModeChange(null);
        } else {
            onDragModeChange(dragMode);
        }
    }, [dragMode, dragEnabled]);

    // Register listener to switch modes in edit mode
    // In non-edit mode we stay in one mode only
    useEffect(() => {
        const cmdHandler = (ev: KeyboardEvent): void => {
            // Left Alt (for Windows&Mac) or Left CMD (for OSX)
            const codes = ['AltLeft', 'MetaLeft', 'OSLeft'];
            if (codes.includes(ev.code)) {
                setDragMode(dragMode === 'move_node' ? 'create_edge' : 'move_node');
            }
        };

        // If both edge adding and node dragging is not allowed, there is no point in switching modes
        if (editMode && allowEdgeAdd && allowNodeDrag) {
            document.addEventListener('keydown', cmdHandler);
            document.addEventListener('keyup', cmdHandler);
        }

        return () => {
            if (editMode && allowEdgeAdd && allowNodeDrag) {
                document.removeEventListener('keydown', cmdHandler);
                document.removeEventListener('keyup', cmdHandler);
            }
        };
    }, [dragMode]);

    return { dragEnabled, dragMode, setDragMode };
}

export default useDragMode;
