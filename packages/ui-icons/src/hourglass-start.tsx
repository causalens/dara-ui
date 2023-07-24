import { faHourglassStart } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HourglassStart icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HourglassStart = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHourglassStart} {...props} />;
};

export default HourglassStart;
