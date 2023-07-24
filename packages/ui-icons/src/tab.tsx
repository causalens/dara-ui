import { mdiTab } from '@mdi/js';

import { IconProps, StyledMDIcon } from './icon-utils';

/**
 * A Tab icon from Material Design
 *
 * @param {IconProps} props - the component props
 */
const Tab = (props: IconProps): JSX.Element => {
    return <StyledMDIcon path={mdiTab} {...props} />;
};

export default Tab;
