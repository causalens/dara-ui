import { faUserEdit } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * UserEdit icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const UserEdit = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faUserEdit} {...props} />;
};

export default UserEdit;
