import { faHourglassEmpty } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HourglassEmpty icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HourglassEmpty = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHourglassEmpty} {...props} />;
};

export default HourglassEmpty;
