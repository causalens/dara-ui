import { faTemperatureHigh } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * TemperatureHigh icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const TemperatureHigh = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTemperatureHigh} {...props} />;
};

export default TemperatureHigh;
