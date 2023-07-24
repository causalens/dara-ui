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
