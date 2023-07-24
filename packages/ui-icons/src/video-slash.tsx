import { faVideoSlash } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * VideoSlash icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const VideoSlash = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faVideoSlash} {...props} />;
};

export default VideoSlash;
