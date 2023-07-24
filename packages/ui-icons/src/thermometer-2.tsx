import { faThermometer2 } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Thermometer2 icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Thermometer2 = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faThermometer2} {...props} />;
};

export default Thermometer2;
