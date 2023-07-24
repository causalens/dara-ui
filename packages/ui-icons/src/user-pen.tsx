import { faUserPen } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * UserPen icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const UserPen = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faUserPen} {...props} />;
};

export default UserPen;
