import { faTemperatureEmpty } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * TemperatureEmpty icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const TemperatureEmpty = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTemperatureEmpty} {...props} />;
};

export default TemperatureEmpty;
