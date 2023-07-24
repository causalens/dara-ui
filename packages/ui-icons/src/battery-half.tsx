import { faBatteryHalf } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * BatteryHalf icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const BatteryHalf = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBatteryHalf} {...props} />;
};

export default BatteryHalf;
