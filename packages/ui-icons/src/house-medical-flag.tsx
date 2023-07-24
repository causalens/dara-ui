import { faHouseMedicalFlag } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HouseMedicalFlag icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HouseMedicalFlag = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHouseMedicalFlag} {...props} />;
};

export default HouseMedicalFlag;
