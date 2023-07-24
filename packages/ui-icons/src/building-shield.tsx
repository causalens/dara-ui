import { faBuildingShield } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * BuildingShield icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const BuildingShield = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBuildingShield} {...props} />;
};

export default BuildingShield;
