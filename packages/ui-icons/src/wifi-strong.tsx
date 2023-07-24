import { faWifiStrong } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * WifiStrong icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const WifiStrong = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faWifiStrong} {...props} />;
};

export default WifiStrong;
