import { faTrafficLight } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * TrafficLight icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const TrafficLight = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTrafficLight} {...props} />;
};

export default TrafficLight;
