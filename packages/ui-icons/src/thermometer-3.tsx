import { faThermometer3 } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Thermometer3 icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Thermometer3 = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faThermometer3} {...props} />;
};

export default Thermometer3;
