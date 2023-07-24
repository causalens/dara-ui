import { faBridgeLock } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * BridgeLock icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const BridgeLock = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBridgeLock} {...props} />;
};

export default BridgeLock;
