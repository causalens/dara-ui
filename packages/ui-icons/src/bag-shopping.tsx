import { faBagShopping } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * BagShopping icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const BagShopping = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBagShopping} {...props} />;
};

export default BagShopping;
