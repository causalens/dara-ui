import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CartShopping icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CartShopping = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCartShopping} {...props} />;
};

export default CartShopping;
