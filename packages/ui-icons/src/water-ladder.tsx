import { faWaterLadder } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * WaterLadder icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const WaterLadder = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faWaterLadder} {...props} />;
};

export default WaterLadder;
