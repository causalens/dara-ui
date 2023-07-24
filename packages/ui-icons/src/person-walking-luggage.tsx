import { faPersonWalkingLuggage } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PersonWalkingLuggage icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PersonWalkingLuggage = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPersonWalkingLuggage} {...props} />;
};

export default PersonWalkingLuggage;
