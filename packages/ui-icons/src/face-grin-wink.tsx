import { faFaceGrinWink } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FaceGrinWink icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FaceGrinWink = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFaceGrinWink} {...props} />;
};

export default FaceGrinWink;
