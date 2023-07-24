import { faFaceAngry } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FaceAngry icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FaceAngry = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFaceAngry} {...props} />;
};

export default FaceAngry;
