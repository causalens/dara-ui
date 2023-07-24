import { faHouseUser } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HouseUser icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HouseUser = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHouseUser} {...props} />;
};

export default HouseUser;
