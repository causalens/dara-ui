import { faThermometerEmpty } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ThermometerEmpty icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ThermometerEmpty = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faThermometerEmpty} {...props} />;
};

export default ThermometerEmpty;
