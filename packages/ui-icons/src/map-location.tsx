import { faMapLocation } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * MapLocation icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const MapLocation = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMapLocation} {...props} />;
};

export default MapLocation;
