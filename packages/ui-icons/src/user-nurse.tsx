import { faUserNurse } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * UserNurse icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const UserNurse = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faUserNurse} {...props} />;
};

export default UserNurse;
