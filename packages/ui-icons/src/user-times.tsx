import { faUserTimes } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * UserTimes icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const UserTimes = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faUserTimes} {...props} />;
};

export default UserTimes;
