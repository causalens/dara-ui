/**
 * Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
 *
 * Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
 *
 * As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
 * use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
 */
import * as PIXI from 'pixi.js';

import { ZoomState, ZoomThresholds } from '@types';

export const MOUSE_EVENTS = ['mousemove', 'mouseover', 'mouseout', 'mousedown', 'mouseup'] as const;

const colorCache = new Map<string, [number, number]>();

/**
 * Parse a given CSS color definition to a format understood by PIXI.
 *
 * Memoized for performance
 *
 * @param color string color definition
 */
export function colorToPixi(color: string): [hex: number, alpha: number] {
    if (colorCache.has(color)) {
        return colorCache.get(color);
    }

    const pixiColor = new PIXI.Color(color);
    const result = [pixiColor.toNumber(), pixiColor.alpha] as [number, number];
    colorCache.set(color, result);
    return result;
}

const DELIMITER = '::';

/**
 * Create a unique key based on given set of params
 *
 * @param params parameters to use
 */
export function createKey(...params: Array<string | number | boolean>): string {
    return params.join(DELIMITER);
}

const DEFAULT_ZOOM_THRESHOLDS: ZoomThresholds = {
    edge: 0.08,
    label: 0.3,
    shadow: 0.6,
    symbol: 0.2,
};

/**
 * Get current zoom state based on current scale
 *
 * @param scale current zoom scale
 * @param zoomThresholds custom zoom thresholds to use, if not provided, default thresholds are used
 */
export function getZoomState(scale: number, zoomThresholds?: ZoomThresholds): ZoomState {
    return Object.entries(zoomThresholds ?? DEFAULT_ZOOM_THRESHOLDS).reduce(
        (acc, [key, value]) => ({
            ...acc,
            [key]: scale > value,
        }),
        {} as ZoomState
    );
}
