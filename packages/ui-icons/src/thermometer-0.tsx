import { faThermometer0 } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Thermometer0 icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Thermometer0 = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faThermometer0} {...props} />;
};

export default Thermometer0;
