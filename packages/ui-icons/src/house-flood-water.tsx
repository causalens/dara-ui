import { faHouseFloodWater } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HouseFloodWater icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HouseFloodWater = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHouseFloodWater} {...props} />;
};

export default HouseFloodWater;
