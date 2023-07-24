import { faWheelchairMove } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * WheelchairMove icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const WheelchairMove = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faWheelchairMove} {...props} />;
};

export default WheelchairMove;
