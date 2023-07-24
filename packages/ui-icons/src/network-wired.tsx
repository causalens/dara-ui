import { faNetworkWired } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * NetworkWired icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const NetworkWired = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faNetworkWired} {...props} />;
};

export default NetworkWired;
