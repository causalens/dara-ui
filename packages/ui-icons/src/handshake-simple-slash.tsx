import { faHandshakeSimpleSlash } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HandshakeSimpleSlash icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HandshakeSimpleSlash = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHandshakeSimpleSlash} {...props} />;
};

export default HandshakeSimpleSlash;
