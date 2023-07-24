import { faUsersGear } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * UsersGear icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const UsersGear = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faUsersGear} {...props} />;
};

export default UsersGear;
