import { faThermometer1 } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Thermometer1 icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Thermometer1 = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faThermometer1} {...props} />;
};

export default Thermometer1;
