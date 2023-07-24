import { faCommentMedical } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CommentMedical icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CommentMedical = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCommentMedical} {...props} />;
};

export default CommentMedical;
