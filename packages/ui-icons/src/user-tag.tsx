import { faUserTag } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * UserTag icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const UserTag = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faUserTag} {...props} />;
};

export default UserTag;
