import { faHouseMedicalCircleCheck } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HouseMedicalCircleCheck icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HouseMedicalCircleCheck = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHouseMedicalCircleCheck} {...props} />;
};

export default HouseMedicalCircleCheck;
