import { faTruckRampBox } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * TruckRampBox icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const TruckRampBox = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTruckRampBox} {...props} />;
};

export default TruckRampBox;
