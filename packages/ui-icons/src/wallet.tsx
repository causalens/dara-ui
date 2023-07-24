import { faWallet } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Wallet icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Wallet = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faWallet} {...props} />;
};

export default Wallet;
