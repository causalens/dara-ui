import { faHouseMedicalCircleExclamation } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HouseMedicalCircleExclamation icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HouseMedicalCircleExclamation = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHouseMedicalCircleExclamation} {...props} />;
};

export default HouseMedicalCircleExclamation;
