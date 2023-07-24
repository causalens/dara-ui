import { faBuildingCircleCheck } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * BuildingCircleCheck icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const BuildingCircleCheck = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBuildingCircleCheck} {...props} />;
};

export default BuildingCircleCheck;
