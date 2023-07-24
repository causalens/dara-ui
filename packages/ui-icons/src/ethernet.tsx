import { faEthernet } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Ethernet icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Ethernet = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faEthernet} {...props} />;
};

export default Ethernet;
