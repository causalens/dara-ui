import { faCommentDots } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CommentDots icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CommentDots = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCommentDots} {...props} />;
};

export default CommentDots;
