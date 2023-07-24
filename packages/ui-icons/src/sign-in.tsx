import { faSignIn } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SignIn icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SignIn = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSignIn} {...props} />;
};

export default SignIn;
