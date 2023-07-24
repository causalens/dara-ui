import { faShopLock } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ShopLock icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ShopLock = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faShopLock} {...props} />;
};

export default ShopLock;
