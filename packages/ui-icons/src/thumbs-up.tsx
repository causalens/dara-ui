import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ThumbsUp icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ThumbsUp = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faThumbsUp} {...props} />;
};

export default ThumbsUp;
