import { faPersonWalkingWithCane } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PersonWalkingWithCane icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PersonWalkingWithCane = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPersonWalkingWithCane} {...props} />;
};

export default PersonWalkingWithCane;
