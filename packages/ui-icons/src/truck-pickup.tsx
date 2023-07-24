import { faTruckPickup } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * TruckPickup icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const TruckPickup = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTruckPickup} {...props} />;
};

export default TruckPickup;
