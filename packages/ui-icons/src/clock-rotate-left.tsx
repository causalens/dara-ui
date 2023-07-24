import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ClockRotateLeft icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ClockRotateLeft = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faClockRotateLeft} {...props} />;
};

export default ClockRotateLeft;
