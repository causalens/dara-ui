/**
 * Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
 *
 * Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
 *
 * As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
 * use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
 */
import { useContext } from 'react';

import PointerContext from '@shared/pointer-context';
import { useSettings } from '@shared/settings-context';

import { PanelContent } from './panel-content';
import { BottomDiv, BottomLeftDiv, BottomRightDiv, TopDiv, TopLeftDiv, TopRightDiv } from './positional-divs';

interface EditorOverlayProps {
    /** Render prop for content to place in the bottom left of the overlay */
    bottomLeft?: React.ReactNode;
    /** Render prop for content to place in the bottom right of the overlay */
    bottomRight?: React.ReactNode;
    /** Children */
    children?: React.ReactNode;
    /** Whether to hide the frame and show just the graph */
    hideFrame?: boolean;
    /** Function to delete currently selected content */
    onDelete: () => void | Promise<void>;
    /** Function to select the next edge/node */
    onNext: () => void | Promise<void>;
    /** Function to select the previous edge/node */
    onPrev: () => void | Promise<void>;
    /** When set to true, the elements inside the overlay become visible */
    showFrameButtons?: boolean;
    /** Panel title */
    title?: string;
    /** Render prop for content to place in the top left of the overlay */
    topLeft?: React.ReactNode;
    /** Render prop for content to place in the top right of the overlay */
    topRight?: React.ReactNode;
    /** Whether there is valid content selected */
    validContentSelected: boolean;
}

/**
 * The EditorOverlay component creates an overlay for use with a Graph
 * This overlay goes on top of a graph and provides actions in each corner
 * This overlay also includes a dissmissable info panel
 */
function EditorOverlay(props: EditorOverlayProps): JSX.Element {
    const { editable, allowSelectionWhenNotEditable } = useSettings();
    const { onPanelEnter, onPanelExit } = useContext(PointerContext);

    if (props.hideFrame) {
        return null;
    }

    const controlPadding = '10px';

    const showPanel = editable || allowSelectionWhenNotEditable;
    const showClass = props.showFrameButtons ? 'show' : undefined;

    return (
        <>
            <TopDiv className={showClass} padding={controlPadding}>
                <TopLeftDiv onMouseEnter={onPanelEnter} onMouseLeave={onPanelExit}>
                    {props.topLeft}
                </TopLeftDiv>
                <TopRightDiv onMouseEnter={onPanelEnter} onMouseLeave={onPanelExit}>
                    {props.topRight}
                </TopRightDiv>
            </TopDiv>

            <BottomDiv className={showClass} padding={controlPadding}>
                <BottomLeftDiv onMouseEnter={onPanelEnter} onMouseLeave={onPanelExit}>
                    {props.bottomLeft}
                </BottomLeftDiv>
                <BottomRightDiv onMouseEnter={onPanelEnter} onMouseLeave={onPanelExit}>
                    {props.bottomRight}
                </BottomRightDiv>
            </BottomDiv>

            {showPanel && props.validContentSelected && (
                <PanelContent
                    onDelete={props.onDelete}
                    onMouseEnter={onPanelEnter}
                    onMouseLeave={onPanelExit}
                    onNext={props.onNext}
                    onPrev={props.onPrev}
                    title={props.title}
                >
                    {props.children ?? null}
                </PanelContent>
            )}
        </>
    );
}

export default EditorOverlay;
