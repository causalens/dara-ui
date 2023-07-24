import { faMapMarked } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * MapMarked icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const MapMarked = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMapMarked} {...props} />;
};

export default MapMarked;
