import { faFaceGrinTongue } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FaceGrinTongue icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FaceGrinTongue = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFaceGrinTongue} {...props} />;
};

export default FaceGrinTongue;
