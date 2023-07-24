import { faBuildingLock } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * BuildingLock icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const BuildingLock = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBuildingLock} {...props} />;
};

export default BuildingLock;
