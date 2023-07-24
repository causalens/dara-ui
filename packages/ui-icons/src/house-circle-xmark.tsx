import { faHouseCircleXmark } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HouseCircleXmark icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HouseCircleXmark = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHouseCircleXmark} {...props} />;
};

export default HouseCircleXmark;
