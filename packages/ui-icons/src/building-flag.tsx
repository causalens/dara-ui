import { faBuildingFlag } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * BuildingFlag icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const BuildingFlag = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBuildingFlag} {...props} />;
};

export default BuildingFlag;
