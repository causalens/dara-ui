/**
 * Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
 *
 * Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
 *
 * As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
 * use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
 */
export enum Key {
    BACKSPACE = 'Backspace',
    CTRL = 'Control',
    DOWN = 'ArrowDown',
    ENTER = 'Enter',
    ESCAPE = 'Escape',
    LEFT = 'ArrowLeft',
    META = 'Meta',
    MINUS = '-',
    PERIOD = '.',
    RIGHT = 'ArrowRight',
    SHIFT = 'Shift',
    TAB = 'Tab',
    UP = 'ArrowUp',
}

// A list of keys for the common controls / modifiers
export const CONTROL_KEYS: string[] = [
    Key.ESCAPE,
    Key.TAB,
    Key.ENTER,
    Key.BACKSPACE,
    Key.CTRL,
    Key.SHIFT,
    Key.UP,
    Key.DOWN,
    Key.LEFT,
    Key.RIGHT,
    Key.META,
];
