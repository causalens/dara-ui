import { faTruckFront } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * TruckFront icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const TruckFront = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTruckFront} {...props} />;
};

export default TruckFront;
