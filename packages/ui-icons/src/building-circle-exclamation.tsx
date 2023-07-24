import { faBuildingCircleExclamation } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * BuildingCircleExclamation icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const BuildingCircleExclamation = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBuildingCircleExclamation} {...props} />;
};

export default BuildingCircleExclamation;
