import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ShoppingCart icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ShoppingCart = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faShoppingCart} {...props} />;
};

export default ShoppingCart;
