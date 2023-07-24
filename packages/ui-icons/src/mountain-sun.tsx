import { faMountainSun } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * MountainSun icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const MountainSun = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMountainSun} {...props} />;
};

export default MountainSun;
