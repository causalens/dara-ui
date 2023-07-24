import { faUsers } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Users icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Users = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faUsers} {...props} />;
};

export default Users;
