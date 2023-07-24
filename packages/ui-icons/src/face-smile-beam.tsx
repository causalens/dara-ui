import { faFaceSmileBeam } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FaceSmileBeam icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FaceSmileBeam = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFaceSmileBeam} {...props} />;
};

export default FaceSmileBeam;
