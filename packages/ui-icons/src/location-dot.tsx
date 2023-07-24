import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * LocationDot icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const LocationDot = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faLocationDot} {...props} />;
};

export default LocationDot;
