import { faHouseMedicalCircleXmark } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HouseMedicalCircleXmark icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HouseMedicalCircleXmark = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHouseMedicalCircleXmark} {...props} />;
};

export default HouseMedicalCircleXmark;
