import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SignInAlt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SignInAlt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSignInAlt} {...props} />;
};

export default SignInAlt;
