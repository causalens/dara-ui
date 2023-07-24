import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ShoppingBag icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ShoppingBag = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faShoppingBag} {...props} />;
};

export default ShoppingBag;
