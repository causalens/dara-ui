import { faKissWinkHeart } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * KissWinkHeart icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const KissWinkHeart = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faKissWinkHeart} {...props} />;
};

export default KissWinkHeart;
