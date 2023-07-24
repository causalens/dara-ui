import { faHourglassEnd } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HourglassEnd icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HourglassEnd = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHourglassEnd} {...props} />;
};

export default HourglassEnd;
