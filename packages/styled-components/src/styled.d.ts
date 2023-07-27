/**
* Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
*
* Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
*
* As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
* use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
*/
/**
 * File is needed to properly define the types for the default theme and give you type checking for accessing the theme
 *
 * https://styled-components.com/docs/api#typescript
 */
import 'styled-components';

// and extend them!
declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            primary: string;
            primaryHover: string;
            primaryDown: string;

            background: string;
            text: string;

            grey1: string;
            grey2: string;
            grey3: string;
            grey4: string;
            grey5: string;
            grey6: string;

            blue1: string;
            blue2: string;
            blue3: string;
            blue4: string;

            violet: string;
            turquoise: string;
            purple: string;
            teal: string;
            orange: string;
            plum: string;

            error: string;
            errorHover: string;
            errorDown: string;

            secondary: string;
            secondaryHover: string;
            secondaryDown: string;

            success: string;
            successHover: string;
            successDown: string;

            warning: string;
            warningHover: string;
            warningDown: string;

            modalBg: string;
            shadowLight: string;
            shadowMedium: string;
        };
        font: {
            size: string;
        };
        shadow: {
            light: string;
            medium: string;
        };
        themeType: string;
    }
}
