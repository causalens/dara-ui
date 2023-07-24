import { faStopwatch20 } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Stopwatch20 icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Stopwatch20 = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faStopwatch20} {...props} />;
};

export default Stopwatch20;
