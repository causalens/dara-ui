import { faUserClock } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * UserClock icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const UserClock = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faUserClock} {...props} />;
};

export default UserClock;
