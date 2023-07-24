import { faLocationPinLock } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * LocationPinLock icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const LocationPinLock = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faLocationPinLock} {...props} />;
};

export default LocationPinLock;
