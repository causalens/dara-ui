import { faHardDrive } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HardDrive icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HardDrive = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHardDrive} {...props} />;
};

export default HardDrive;
