import { faUserXmark } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * UserXmark icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const UserXmark = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faUserXmark} {...props} />;
};

export default UserXmark;
