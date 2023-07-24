import { faGauge } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Gauge icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Gauge = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faGauge} {...props} />;
};

export default Gauge;
