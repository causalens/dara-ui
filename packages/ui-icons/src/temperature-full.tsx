import { faTemperatureFull } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * TemperatureFull icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const TemperatureFull = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTemperatureFull} {...props} />;
};

export default TemperatureFull;
