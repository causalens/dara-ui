import { faUsersLine } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * UsersLine icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const UsersLine = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faUsersLine} {...props} />;
};

export default UsersLine;
