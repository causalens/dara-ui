/**
 * Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
 *
 * Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
 *
 * As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
 * use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
 */
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
