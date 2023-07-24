import { faFaceKissBeam } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FaceKissBeam icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FaceKissBeam = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFaceKissBeam} {...props} />;
};

export default FaceKissBeam;
