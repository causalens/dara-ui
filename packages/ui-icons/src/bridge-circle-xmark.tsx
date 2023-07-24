import { faBridgeCircleXmark } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * BridgeCircleXmark icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const BridgeCircleXmark = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBridgeCircleXmark} {...props} />;
};

export default BridgeCircleXmark;
