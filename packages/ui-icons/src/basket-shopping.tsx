import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * BasketShopping icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const BasketShopping = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBasketShopping} {...props} />;
};

export default BasketShopping;
