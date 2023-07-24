import { faTruckMoving } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * TruckMoving icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const TruckMoving = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTruckMoving} {...props} />;
};

export default TruckMoving;
