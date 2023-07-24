import { faTemperatureQuarter } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * TemperatureQuarter icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const TemperatureQuarter = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTemperatureQuarter} {...props} />;
};

export default TemperatureQuarter;
