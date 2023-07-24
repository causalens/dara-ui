import { faFaucet } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Faucet icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Faucet = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFaucet} {...props} />;
};

export default Faucet;
