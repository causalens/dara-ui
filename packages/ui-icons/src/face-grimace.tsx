import { faFaceGrimace } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FaceGrimace icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FaceGrimace = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFaceGrimace} {...props} />;
};

export default FaceGrimace;
