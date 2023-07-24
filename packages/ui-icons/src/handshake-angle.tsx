import { faHandshakeAngle } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HandshakeAngle icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HandshakeAngle = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHandshakeAngle} {...props} />;
};

export default HandshakeAngle;
