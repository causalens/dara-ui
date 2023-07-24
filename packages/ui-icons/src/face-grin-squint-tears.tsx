import { faFaceGrinSquintTears } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FaceGrinSquintTears icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FaceGrinSquintTears = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFaceGrinSquintTears} {...props} />;
};

export default FaceGrinSquintTears;
