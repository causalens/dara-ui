import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CartArrowDown icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CartArrowDown = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCartArrowDown} {...props} />;
};

export default CartArrowDown;
