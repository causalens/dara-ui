import { faBatteryEmpty } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * BatteryEmpty icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const BatteryEmpty = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBatteryEmpty} {...props} />;
};

export default BatteryEmpty;
