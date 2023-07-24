import { faComments } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Comments icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Comments = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faComments} {...props} />;
};

export default Comments;
