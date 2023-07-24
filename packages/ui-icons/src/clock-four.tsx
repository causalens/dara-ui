import { faClockFour } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ClockFour icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ClockFour = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faClockFour} {...props} />;
};

export default ClockFour;
