import { faLocationPin } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * LocationPin icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const LocationPin = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faLocationPin} {...props} />;
};

export default LocationPin;
