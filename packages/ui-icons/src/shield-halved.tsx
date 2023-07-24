import { faShieldHalved } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ShieldHalved icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ShieldHalved = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faShieldHalved} {...props} />;
};

export default ShieldHalved;
