import { faUserTie } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * UserTie icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const UserTie = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faUserTie} {...props} />;
};

export default UserTie;
