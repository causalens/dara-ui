import { faPersonWalkingArrowRight } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PersonWalkingArrowRight icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PersonWalkingArrowRight = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPersonWalkingArrowRight} {...props} />;
};

export default PersonWalkingArrowRight;
