import { faCommentSlash } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CommentSlash icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CommentSlash = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCommentSlash} {...props} />;
};

export default CommentSlash;
