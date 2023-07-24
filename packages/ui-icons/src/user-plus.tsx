import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * UserPlus icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const UserPlus = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faUserPlus} {...props} />;
};

export default UserPlus;
