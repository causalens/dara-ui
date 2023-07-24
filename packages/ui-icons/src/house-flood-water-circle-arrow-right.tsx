import { faHouseFloodWaterCircleArrowRight } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HouseFloodWaterCircleArrowRight icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HouseFloodWaterCircleArrowRight = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHouseFloodWaterCircleArrowRight} {...props} />;
};

export default HouseFloodWaterCircleArrowRight;
