import { faTemperatureUp } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * TemperatureUp icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const TemperatureUp = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTemperatureUp} {...props} />;
};

export default TemperatureUp;
