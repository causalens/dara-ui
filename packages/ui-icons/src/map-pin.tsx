import { faMapPin } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * MapPin icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const MapPin = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMapPin} {...props} />;
};

export default MapPin;
