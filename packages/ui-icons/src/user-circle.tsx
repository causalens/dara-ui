import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * UserCircle icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const UserCircle = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faUserCircle} {...props} />;
};

export default UserCircle;
