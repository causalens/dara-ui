import { faShieldDog } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ShieldDog icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ShieldDog = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faShieldDog} {...props} />;
};

export default ShieldDog;
