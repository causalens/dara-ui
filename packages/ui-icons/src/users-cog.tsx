import { faUsersCog } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * UsersCog icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const UsersCog = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faUsersCog} {...props} />;
};

export default UsersCog;
