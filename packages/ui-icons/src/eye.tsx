import { mdiEye } from '@mdi/js';

import { IconProps, StyledMDIcon } from './icon-utils';

/**
 * Eye icon from Material Design
 *
 * @param {IconProps} props - the component props
 */
const Eye = (props: IconProps): JSX.Element => {
    return <StyledMDIcon path={mdiEye} {...props} />;
};

export default Eye;
