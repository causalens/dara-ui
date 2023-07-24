import { faBuildingUn } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * BuildingUn icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const BuildingUn = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBuildingUn} {...props} />;
};

export default BuildingUn;
