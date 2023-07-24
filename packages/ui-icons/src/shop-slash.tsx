import { faShopSlash } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ShopSlash icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ShopSlash = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faShopSlash} {...props} />;
};

export default ShopSlash;
