import { faCommentDollar } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CommentDollar icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CommentDollar = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCommentDollar} {...props} />;
};

export default CommentDollar;
