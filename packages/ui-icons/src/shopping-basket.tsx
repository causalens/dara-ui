import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ShoppingBasket icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ShoppingBasket = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faShoppingBasket} {...props} />;
};

export default ShoppingBasket;
