import { faSignLanguage } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SignLanguage icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SignLanguage = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSignLanguage} {...props} />;
};

export default SignLanguage;
