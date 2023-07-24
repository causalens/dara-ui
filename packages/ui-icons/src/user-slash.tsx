import { faUserSlash } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * UserSlash icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const UserSlash = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faUserSlash} {...props} />;
};

export default UserSlash;
