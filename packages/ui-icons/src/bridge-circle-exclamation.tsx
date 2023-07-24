import { faBridgeCircleExclamation } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * BridgeCircleExclamation icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const BridgeCircleExclamation = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBridgeCircleExclamation} {...props} />;
};

export default BridgeCircleExclamation;
