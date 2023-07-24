import { faChargingStation } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ChargingStation icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ChargingStation = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faChargingStation} {...props} />;
};

export default ChargingStation;
