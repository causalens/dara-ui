import { faParking } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Parking icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Parking = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faParking} {...props} />;
};

export default Parking;
