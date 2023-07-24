import { faUsersSlash } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * UsersSlash icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const UsersSlash = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faUsersSlash} {...props} />;
};

export default UsersSlash;
