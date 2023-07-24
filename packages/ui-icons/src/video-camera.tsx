import { faVideoCamera } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * VideoCamera icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const VideoCamera = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faVideoCamera} {...props} />;
};

export default VideoCamera;
