/**
 * Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
 *
 * Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
 *
 * As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
 * use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
 */
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
