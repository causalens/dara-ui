import { faHouseCircleExclamation } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HouseCircleExclamation icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HouseCircleExclamation = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHouseCircleExclamation} {...props} />;
};

export default HouseCircleExclamation;
