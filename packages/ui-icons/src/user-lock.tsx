import { faUserLock } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * UserLock icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const UserLock = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faUserLock} {...props} />;
};

export default UserLock;
