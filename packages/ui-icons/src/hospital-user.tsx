import { faHospitalUser } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HospitalUser icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HospitalUser = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHospitalUser} {...props} />;
};

export default HospitalUser;
