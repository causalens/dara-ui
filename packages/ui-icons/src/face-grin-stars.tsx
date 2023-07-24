import { faFaceGrinStars } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FaceGrinStars icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FaceGrinStars = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFaceGrinStars} {...props} />;
};

export default FaceGrinStars;
