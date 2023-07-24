import { faHospitalSymbol } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HospitalSymbol icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HospitalSymbol = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHospitalSymbol} {...props} />;
};

export default HospitalSymbol;
