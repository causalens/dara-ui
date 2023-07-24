import { createContext } from 'react';

interface PointerContext {
    /**
     * Whether to disable pointer events on the panels
     */
    disablePointerEvents: boolean;
    /**
     * Handler for when a panel is hovered over
     */
    onPanelEnter: () => void;
    /**
     * Handler for when a panel is no longer hovered over
     */
    onPanelExit: () => void;
}

/**
 * Context for handling interactions between the editor overlay and the editor canvas
 */
const pointerCtx = createContext<PointerContext>(null);

export default pointerCtx;
