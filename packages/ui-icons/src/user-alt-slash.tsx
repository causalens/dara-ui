import { faUserAltSlash } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * UserAltSlash icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const UserAltSlash = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faUserAltSlash} {...props} />;
};

export default UserAltSlash;
