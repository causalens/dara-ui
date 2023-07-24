import { faThermometer4 } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Thermometer4 icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Thermometer4 = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faThermometer4} {...props} />;
};

export default Thermometer4;
