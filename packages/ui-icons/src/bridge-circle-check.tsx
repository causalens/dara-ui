import { faBridgeCircleCheck } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * BridgeCircleCheck icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const BridgeCircleCheck = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBridgeCircleCheck} {...props} />;
};

export default BridgeCircleCheck;
