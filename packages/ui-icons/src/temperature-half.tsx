import { faTemperatureHalf } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * TemperatureHalf icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const TemperatureHalf = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTemperatureHalf} {...props} />;
};

export default TemperatureHalf;
