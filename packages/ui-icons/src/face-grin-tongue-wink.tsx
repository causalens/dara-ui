import { faFaceGrinTongueWink } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FaceGrinTongueWink icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FaceGrinTongueWink = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFaceGrinTongueWink} {...props} />;
};

export default FaceGrinTongueWink;
