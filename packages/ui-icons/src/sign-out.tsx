import { faSignOut } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SignOut icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SignOut = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSignOut} {...props} />;
};

export default SignOut;
