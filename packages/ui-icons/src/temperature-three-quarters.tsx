import { faTemperatureThreeQuarters } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * TemperatureThreeQuarters icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const TemperatureThreeQuarters = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTemperatureThreeQuarters} {...props} />;
};

export default TemperatureThreeQuarters;
