/**
* Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
*
* Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
*
* As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
* use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
*/
import { DefaultTheme } from '@darajs/styled-components';

interface Shadows {
    shadowHover: string;
    shadowNormal: string;
}

/**
 * Shadow colors for the graph UI
 */
export const SHADOWS: Record<DefaultTheme['themeType'], Shadows> = {
    dark: {
        shadowHover: 'rgba(255, 255, 255, 0.3)',
        shadowNormal: 'rgba(0, 0, 0, 0.6)',
    },
    light: {
        shadowHover: 'rgba(0, 0, 0, 0.5)',
        shadowNormal: 'rgba(0, 0, 0, 0.25)',
    },
};
