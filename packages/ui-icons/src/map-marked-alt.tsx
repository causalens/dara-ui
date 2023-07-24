import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * MapMarkedAlt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const MapMarkedAlt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMapMarkedAlt} {...props} />;
};

export default MapMarkedAlt;
