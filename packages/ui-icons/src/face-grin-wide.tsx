import { faFaceGrinWide } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FaceGrinWide icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FaceGrinWide = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFaceGrinWide} {...props} />;
};

export default FaceGrinWide;
