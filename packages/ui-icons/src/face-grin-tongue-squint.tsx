import { faFaceGrinTongueSquint } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FaceGrinTongueSquint icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FaceGrinTongueSquint = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFaceGrinTongueSquint} {...props} />;
};

export default FaceGrinTongueSquint;
