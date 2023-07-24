import { faFaceSmile } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FaceSmile icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FaceSmile = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFaceSmile} {...props} />;
};

export default FaceSmile;
