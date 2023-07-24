import { faFaceGrinSquint } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FaceGrinSquint icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FaceGrinSquint = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFaceGrinSquint} {...props} />;
};

export default FaceGrinSquint;
