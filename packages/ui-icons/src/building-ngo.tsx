import { faBuildingNgo } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * BuildingNgo icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const BuildingNgo = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBuildingNgo} {...props} />;
};

export default BuildingNgo;
