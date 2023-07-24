import { faWheelchairAlt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * WheelchairAlt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const WheelchairAlt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faWheelchairAlt} {...props} />;
};

export default WheelchairAlt;
