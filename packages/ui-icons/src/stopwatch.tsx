import { faStopwatch } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Stopwatch icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Stopwatch = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faStopwatch} {...props} />;
};

export default Stopwatch;
