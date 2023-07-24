import { faThermometerHalf } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ThermometerHalf icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ThermometerHalf = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faThermometerHalf} {...props} />;
};

export default ThermometerHalf;
