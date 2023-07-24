import { faHouseSignal } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HouseSignal icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HouseSignal = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHouseSignal} {...props} />;
};

export default HouseSignal;
