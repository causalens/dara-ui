/**
* Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
*
* Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
*
* As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
* use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
*/
import { DefaultTheme } from '@darajs/styled-components';

import { PixiNodeStyle } from './definitions';

/**
 * Get node color based on its group
 *
 * @param group node group
 * @param theme current theme colors
 */
export function getNodeColor(group: PixiNodeStyle['group'], theme: DefaultTheme): [bg: string, font: string] {
    switch (group) {
        case 'target':
            return [theme.colors.secondary, theme.colors.blue1];
        case 'latent':
            return [theme.colors.blue1, theme.colors.text];
        default:
            return [theme.colors.blue4, theme.colors.text];
    }
}

/**
 * Get node size based on configured size and group
 *
 * @param size configured node size
 * @param group group node is in
 */
export function getNodeSize(size: number, group: PixiNodeStyle['group']): number {
    const sizeMultiplier = group === 'target' ? 1.25 : 1;

    return size * sizeMultiplier;
}
