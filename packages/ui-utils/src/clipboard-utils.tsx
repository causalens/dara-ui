/**
 * Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
 *
 * Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
 *
 * As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
 * use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
 */
/**
 * Copy given text to the clipboard.
 * Falls back to a deprecated `execCommand` method in case the newer APi isn't available,
 * i.e. in an older browser (see: https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/writeText#browser_compatibility)
 * or in HTTP mode.
 *
 * @param value value to put into clipboard
 */
export async function copyToClipboard(value: string): Promise<boolean> {
    let success = true;

    // If "new" API is available
    if (navigator.clipboard) {
        try {
            await navigator.clipboard.writeText(value);
        } catch {
            success = false;
        }
    } else {
        // Fallback
        const tempComponent = document.createElement('textarea');
        tempComponent.value = value;
        tempComponent.style.top = '0';
        tempComponent.style.left = '0';
        tempComponent.style.position = 'fixed';
        document.body.appendChild(tempComponent);
        tempComponent.focus();
        tempComponent.select();

        try {
            success = document.execCommand('copy');
        } catch {
            success = false;
        }

        document.body.removeChild(tempComponent);
    }

    return success;
}
