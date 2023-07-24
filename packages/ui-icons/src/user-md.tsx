import { faUserMd } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * UserMd icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const UserMd = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faUserMd} {...props} />;
};

export default UserMd;
