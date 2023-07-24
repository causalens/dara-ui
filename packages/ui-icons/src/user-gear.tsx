import { faUserGear } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * UserGear icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const UserGear = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faUserGear} {...props} />;
};

export default UserGear;
