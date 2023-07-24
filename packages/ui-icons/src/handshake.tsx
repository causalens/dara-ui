import { faHandshake } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Handshake icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Handshake = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHandshake} {...props} />;
};

export default Handshake;
