import { faBatteryQuarter } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * BatteryQuarter icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const BatteryQuarter = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBatteryQuarter} {...props} />;
};

export default BatteryQuarter;
