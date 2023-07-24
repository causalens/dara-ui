import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SignOutAlt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SignOutAlt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSignOutAlt} {...props} />;
};

export default SignOutAlt;
