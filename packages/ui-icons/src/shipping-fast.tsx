import { faShippingFast } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ShippingFast icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ShippingFast = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faShippingFast} {...props} />;
};

export default ShippingFast;
