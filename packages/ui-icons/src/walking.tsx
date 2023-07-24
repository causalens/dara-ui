import { faWalking } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Walking icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Walking = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faWalking} {...props} />;
};

export default Walking;
