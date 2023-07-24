import { faVideo } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Video icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Video = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faVideo} {...props} />;
};

export default Video;
