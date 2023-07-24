import { faUserInjured } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * UserInjured icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const UserInjured = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faUserInjured} {...props} />;
};

export default UserInjured;
