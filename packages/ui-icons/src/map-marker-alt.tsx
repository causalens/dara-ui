import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * MapMarkerAlt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const MapMarkerAlt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMapMarkerAlt} {...props} />;
};

export default MapMarkerAlt;
