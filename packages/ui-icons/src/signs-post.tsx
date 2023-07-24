import { faSignsPost } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SignsPost icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SignsPost = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSignsPost} {...props} />;
};

export default SignsPost;
