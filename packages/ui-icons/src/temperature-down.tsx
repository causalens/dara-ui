import { faTemperatureDown } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * TemperatureDown icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const TemperatureDown = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTemperatureDown} {...props} />;
};

export default TemperatureDown;
