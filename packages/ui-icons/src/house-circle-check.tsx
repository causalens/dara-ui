import { faHouseCircleCheck } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HouseCircleCheck icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HouseCircleCheck = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHouseCircleCheck} {...props} />;
};

export default HouseCircleCheck;
