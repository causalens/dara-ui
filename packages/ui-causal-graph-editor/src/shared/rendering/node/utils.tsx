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
