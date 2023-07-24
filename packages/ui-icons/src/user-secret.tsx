import { faUserSecret } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * UserSecret icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const UserSecret = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faUserSecret} {...props} />;
};

export default UserSecret;
