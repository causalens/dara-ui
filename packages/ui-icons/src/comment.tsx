import { faComment } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Comment icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Comment = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faComment} {...props} />;
};

export default Comment;
