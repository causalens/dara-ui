import { faUserLargeSlash } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * UserLargeSlash icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const UserLargeSlash = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faUserLargeSlash} {...props} />;
};

export default UserLargeSlash;
