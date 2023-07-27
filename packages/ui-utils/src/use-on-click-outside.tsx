/**
* Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
*
* Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
*
* As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
* use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
*/
import { useEffect } from 'react';

/**
 * The useOnClickOutside hook allows for a component to track whether a click was made outside an element
 *
 * @param element any element that the hook should handle the click outside of
 * @param handler callback for when a click outside of the given element occurs
 */

function useOnClickOutside(element: HTMLElement, handler: () => void): void {
    useEffect(() => {
        const listener = (event: MouseEvent): void => {
            // Do nothing if clicking ref's element or descendent elements
            if (!element || element.contains(event.target as Node)) {
                return;
            }
            handler();
        };
        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);
        return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
        };
    }, [element, handler]);
}

export default useOnClickOutside;
