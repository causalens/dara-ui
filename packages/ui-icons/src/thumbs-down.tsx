import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ThumbsDown icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ThumbsDown = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faThumbsDown} {...props} />;
};

export default ThumbsDown;
