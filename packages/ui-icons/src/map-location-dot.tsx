import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * MapLocationDot icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const MapLocationDot = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMapLocationDot} {...props} />;
};

export default MapLocationDot;
