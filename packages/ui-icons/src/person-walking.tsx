import { faPersonWalking } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PersonWalking icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PersonWalking = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPersonWalking} {...props} />;
};

export default PersonWalking;
