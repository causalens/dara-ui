import { faHandshakeSlash } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HandshakeSlash icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HandshakeSlash = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHandshakeSlash} {...props} />;
};

export default HandshakeSlash;
