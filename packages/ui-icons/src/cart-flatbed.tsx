import { faCartFlatbed } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CartFlatbed icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CartFlatbed = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCartFlatbed} {...props} />;
};

export default CartFlatbed;
