import { faFaceGrinBeamSweat } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FaceGrinBeamSweat icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FaceGrinBeamSweat = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFaceGrinBeamSweat} {...props} />;
};

export default FaceGrinBeamSweat;
