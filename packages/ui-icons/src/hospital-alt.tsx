import { faHospitalAlt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HospitalAlt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HospitalAlt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHospitalAlt} {...props} />;
};

export default HospitalAlt;
