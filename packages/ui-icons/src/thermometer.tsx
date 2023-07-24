import { faThermometer } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Thermometer icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Thermometer = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faThermometer} {...props} />;
};

export default Thermometer;
