import { faUserFriends } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * UserFriends icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const UserFriends = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faUserFriends} {...props} />;
};

export default UserFriends;
