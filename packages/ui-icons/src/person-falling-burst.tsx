import { faPersonFallingBurst } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PersonFallingBurst icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PersonFallingBurst = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPersonFallingBurst} {...props} />;
};

export default PersonFallingBurst;
