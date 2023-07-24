import { faUser } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * User icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const User = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faUser} {...props} />;
};

export default User;
