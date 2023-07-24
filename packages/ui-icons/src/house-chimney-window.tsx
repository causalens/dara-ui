import { faHouseChimneyWindow } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HouseChimneyWindow icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HouseChimneyWindow = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHouseChimneyWindow} {...props} />;
};

export default HouseChimneyWindow;
