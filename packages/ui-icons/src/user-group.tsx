import { faUserGroup } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * UserGroup icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const UserGroup = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faUserGroup} {...props} />;
};

export default UserGroup;
