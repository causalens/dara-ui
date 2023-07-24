import { faUserShield } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * UserShield icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const UserShield = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faUserShield} {...props} />;
};

export default UserShield;
