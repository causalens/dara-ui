import { faUserNinja } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * UserNinja icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const UserNinja = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faUserNinja} {...props} />;
};

export default UserNinja;
