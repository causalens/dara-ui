import { faBuildingCircleXmark } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * BuildingCircleXmark icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const BuildingCircleXmark = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBuildingCircleXmark} {...props} />;
};

export default BuildingCircleXmark;
