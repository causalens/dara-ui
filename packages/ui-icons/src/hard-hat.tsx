import { faHardHat } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HardHat icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HardHat = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHardHat} {...props} />;
};

export default HardHat;
