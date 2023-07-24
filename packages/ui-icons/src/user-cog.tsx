import { faUserCog } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * UserCog icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const UserCog = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faUserCog} {...props} />;
};

export default UserCog;
