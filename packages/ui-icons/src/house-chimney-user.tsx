import { faHouseChimneyUser } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HouseChimneyUser icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HouseChimneyUser = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHouseChimneyUser} {...props} />;
};

export default HouseChimneyUser;
