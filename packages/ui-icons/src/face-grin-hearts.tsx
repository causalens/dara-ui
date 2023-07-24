import { faFaceGrinHearts } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FaceGrinHearts icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FaceGrinHearts = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFaceGrinHearts} {...props} />;
};

export default FaceGrinHearts;
