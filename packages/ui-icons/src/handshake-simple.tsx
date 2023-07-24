import { faHandshakeSimple } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HandshakeSimple icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HandshakeSimple = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHandshakeSimple} {...props} />;
};

export default HandshakeSimple;
