import { faBuildingCircleArrowRight } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * BuildingCircleArrowRight icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const BuildingCircleArrowRight = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBuildingCircleArrowRight} {...props} />;
};

export default BuildingCircleArrowRight;
