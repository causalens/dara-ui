import { faPersonWalkingDashedLineArrowRight } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PersonWalkingDashedLineArrowRight icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PersonWalkingDashedLineArrowRight = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPersonWalkingDashedLineArrowRight} {...props} />;
};

export default PersonWalkingDashedLineArrowRight;
