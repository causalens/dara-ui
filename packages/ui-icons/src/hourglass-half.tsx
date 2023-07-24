import { faHourglassHalf } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HourglassHalf icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HourglassHalf = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHourglassHalf} {...props} />;
};

export default HourglassHalf;
