import { faTruckFast } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * TruckFast icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const TruckFast = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTruckFast} {...props} />;
};

export default TruckFast;
