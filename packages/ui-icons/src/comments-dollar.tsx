import { faCommentsDollar } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CommentsDollar icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CommentsDollar = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCommentsDollar} {...props} />;
};

export default CommentsDollar;
