import { faTruck } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Truck icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Truck = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTruck} {...props} />;
};

export default Truck;
