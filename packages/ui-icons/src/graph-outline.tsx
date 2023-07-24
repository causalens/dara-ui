import { mdiGraphOutline } from '@mdi/js';

import { IconProps, StyledMDIcon } from './icon-utils';

/**
 * A GraphOutline icon from Material Design
 *
 * @param {IconProps} props - the component props
 */
const GraphOutline = (props: IconProps): JSX.Element => {
    return <StyledMDIcon path={mdiGraphOutline} {...props} />;
};

export default GraphOutline;
