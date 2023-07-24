import { faPhotoVideo } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PhotoVideo icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PhotoVideo = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPhotoVideo} {...props} />;
};

export default PhotoVideo;
