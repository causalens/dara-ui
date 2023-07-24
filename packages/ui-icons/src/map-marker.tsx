import { faMapMarker } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * MapMarker icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const MapMarker = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMapMarker} {...props} />;
};

export default MapMarker;
