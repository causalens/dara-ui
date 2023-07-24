import { faHollyBerry } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HollyBerry icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HollyBerry = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHollyBerry} {...props} />;
};

export default HollyBerry;
