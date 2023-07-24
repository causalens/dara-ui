import { faHandshakeAltSlash } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HandshakeAltSlash icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HandshakeAltSlash = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHandshakeAltSlash} {...props} />;
};

export default HandshakeAltSlash;
