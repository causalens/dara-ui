import { faFaucetDrip } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FaucetDrip icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FaucetDrip = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFaucetDrip} {...props} />;
};

export default FaucetDrip;
