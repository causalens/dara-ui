import { faBatteryFull } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * BatteryFull icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const BatteryFull = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBatteryFull} {...props} />;
};

export default BatteryFull;
