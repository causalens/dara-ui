import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * UserAstronaut icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const UserAstronaut = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faUserAstronaut} {...props} />;
};

export default UserAstronaut;
