import { faHandshakeAlt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HandshakeAlt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HandshakeAlt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHandshakeAlt} {...props} />;
};

export default HandshakeAlt;
