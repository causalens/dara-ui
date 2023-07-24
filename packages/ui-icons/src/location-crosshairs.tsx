import { faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * LocationCrosshairs icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const LocationCrosshairs = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faLocationCrosshairs} {...props} />;
};

export default LocationCrosshairs;
