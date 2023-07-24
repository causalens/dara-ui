import { faMapSigns } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * MapSigns icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const MapSigns = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMapSigns} {...props} />;
};

export default MapSigns;
