import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * LocationArrow icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const LocationArrow = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faLocationArrow} {...props} />;
};

export default LocationArrow;
