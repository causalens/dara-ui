import { faUsersRays } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * UsersRays icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const UsersRays = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faUsersRays} {...props} />;
};

export default UsersRays;
