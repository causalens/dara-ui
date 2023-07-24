import { faFaceSmileWink } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FaceSmileWink icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FaceSmileWink = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFaceSmileWink} {...props} />;
};

export default FaceSmileWink;
