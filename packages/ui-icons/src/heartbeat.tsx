import { faHeartbeat } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Heartbeat icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Heartbeat = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHeartbeat} {...props} />;
};

export default Heartbeat;
