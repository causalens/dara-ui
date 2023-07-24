import { faPersonWalkingArrowLoopLeft } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PersonWalkingArrowLoopLeft icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PersonWalkingArrowLoopLeft = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPersonWalkingArrowLoopLeft} {...props} />;
};

export default PersonWalkingArrowLoopLeft;
