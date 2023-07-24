import { faUserLarge } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * UserLarge icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const UserLarge = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faUserLarge} {...props} />;
};

export default UserLarge;
