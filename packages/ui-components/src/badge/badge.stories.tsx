import { Meta } from '@storybook/react';

import { theme } from '@darajs/styled-components';

import Badge, { BadgeProps } from './badge';

/**
 * As a workaround to storybook not liking bare styled-components:
 * wrap in a React component wrapper
 * and set meta.component to point at the wrapper instead of the actual component
 *
 * Otherwise the documentation auto-generation does not work
 */
export const BadgeWrapper = (props: BadgeProps): JSX.Element => <Badge {...props} />;
BadgeWrapper.storyName = 'Badge';

BadgeWrapper.args = {
    children: ['Badge'],
    color: theme.colors.primary,
};

export default {
    component: BadgeWrapper,
    title: 'UI Components/Badge',
} as Meta;
