import { faUserMinus } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * UserMinus icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const UserMinus = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faUserMinus} {...props} />;
};

export default UserMinus;
