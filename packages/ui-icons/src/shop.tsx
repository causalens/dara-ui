import { faShop } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Shop icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Shop = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faShop} {...props} />;
};

export default Shop;
