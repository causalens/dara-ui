import { faVault } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Vault icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Vault = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faVault} {...props} />;
};

export default Vault;
