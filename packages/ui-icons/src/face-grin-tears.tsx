import { faFaceGrinTears } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FaceGrinTears icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FaceGrinTears = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFaceGrinTears} {...props} />;
};

export default FaceGrinTears;
