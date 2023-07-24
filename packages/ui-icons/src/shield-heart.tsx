import { faShieldHeart } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ShieldHeart icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ShieldHeart = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faShieldHeart} {...props} />;
};

export default ShieldHeart;
