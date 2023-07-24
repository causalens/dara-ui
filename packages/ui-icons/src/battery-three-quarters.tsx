import { faBatteryThreeQuarters } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * BatteryThreeQuarters icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const BatteryThreeQuarters = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBatteryThreeQuarters} {...props} />;
};

export default BatteryThreeQuarters;
