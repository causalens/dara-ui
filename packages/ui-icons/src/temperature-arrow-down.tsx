import { faTemperatureArrowDown } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * TemperatureArrowDown icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const TemperatureArrowDown = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTemperatureArrowDown} {...props} />;
};

export default TemperatureArrowDown;
