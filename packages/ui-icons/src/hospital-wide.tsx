import { faHospitalWide } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HospitalWide icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HospitalWide = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHospitalWide} {...props} />;
};

export default HospitalWide;
