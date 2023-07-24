import { faFeed } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Feed icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Feed = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFeed} {...props} />;
};

export default Feed;
