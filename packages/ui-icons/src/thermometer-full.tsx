import { faThermometerFull } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ThermometerFull icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ThermometerFull = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faThermometerFull} {...props} />;
};

export default ThermometerFull;
