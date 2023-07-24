import { faFaceRollingEyes } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FaceRollingEyes icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FaceRollingEyes = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFaceRollingEyes} {...props} />;
};

export default FaceRollingEyes;
