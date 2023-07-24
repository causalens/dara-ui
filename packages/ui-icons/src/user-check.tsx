import { faUserCheck } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * UserCheck icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const UserCheck = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faUserCheck} {...props} />;
};

export default UserCheck;
