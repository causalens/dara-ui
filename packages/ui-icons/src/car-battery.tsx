import { faCarBattery } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CarBattery icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CarBattery = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCarBattery} {...props} />;
};

export default CarBattery;
