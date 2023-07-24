import { faTruckPlane } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * TruckPlane icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const TruckPlane = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTruckPlane} {...props} />;
};

export default TruckPlane;
