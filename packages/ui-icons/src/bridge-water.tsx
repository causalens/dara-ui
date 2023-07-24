import { faBridgeWater } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * BridgeWater icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const BridgeWater = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBridgeWater} {...props} />;
};

export default BridgeWater;
