import { faUsersRectangle } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * UsersRectangle icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const UsersRectangle = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faUsersRectangle} {...props} />;
};

export default UsersRectangle;
