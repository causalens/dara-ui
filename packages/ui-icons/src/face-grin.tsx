import { faFaceGrin } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FaceGrin icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FaceGrin = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFaceGrin} {...props} />;
};

export default FaceGrin;
