import { faTemperatureArrowUp } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * TemperatureArrowUp icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const TemperatureArrowUp = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTemperatureArrowUp} {...props} />;
};

export default TemperatureArrowUp;
