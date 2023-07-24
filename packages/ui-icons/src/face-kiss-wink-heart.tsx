import { faFaceKissWinkHeart } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FaceKissWinkHeart icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FaceKissWinkHeart = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFaceKissWinkHeart} {...props} />;
};

export default FaceKissWinkHeart;
