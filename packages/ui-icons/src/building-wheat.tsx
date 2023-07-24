import { faBuildingWheat } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * BuildingWheat icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const BuildingWheat = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBuildingWheat} {...props} />;
};

export default BuildingWheat;
