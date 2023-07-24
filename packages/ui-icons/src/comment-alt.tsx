import { faCommentAlt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CommentAlt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CommentAlt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCommentAlt} {...props} />;
};

export default CommentAlt;
