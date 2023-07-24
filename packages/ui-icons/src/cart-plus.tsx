import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CartPlus icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CartPlus = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCartPlus} {...props} />;
};

export default CartPlus;
