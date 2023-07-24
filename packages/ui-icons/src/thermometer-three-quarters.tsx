import { faThermometerThreeQuarters } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ThermometerThreeQuarters icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ThermometerThreeQuarters = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faThermometerThreeQuarters} {...props} />;
};

export default ThermometerThreeQuarters;
