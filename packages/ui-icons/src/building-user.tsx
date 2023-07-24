import { faBuildingUser } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * BuildingUser icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const BuildingUser = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBuildingUser} {...props} />;
};

export default BuildingUser;
