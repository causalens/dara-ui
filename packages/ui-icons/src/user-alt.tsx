import { faUserAlt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * UserAlt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const UserAlt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faUserAlt} {...props} />;
};

export default UserAlt;
