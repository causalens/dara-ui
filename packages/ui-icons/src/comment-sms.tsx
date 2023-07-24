import { faCommentSms } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CommentSms icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CommentSms = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCommentSms} {...props} />;
};

export default CommentSms;
