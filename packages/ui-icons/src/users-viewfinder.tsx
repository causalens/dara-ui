import { faUsersViewfinder } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * UsersViewfinder icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const UsersViewfinder = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faUsersViewfinder} {...props} />;
};

export default UsersViewfinder;
