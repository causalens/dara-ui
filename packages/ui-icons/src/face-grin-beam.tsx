import { faFaceGrinBeam } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FaceGrinBeam icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FaceGrinBeam = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFaceGrinBeam} {...props} />;
};

export default FaceGrinBeam;
