import { faMarker } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Marker icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Marker = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMarker} {...props} />;
};

export default Marker;
