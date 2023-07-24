import { faPersonFalling } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PersonFalling icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PersonFalling = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPersonFalling} {...props} />;
};

export default PersonFalling;
