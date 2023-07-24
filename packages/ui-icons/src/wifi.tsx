import { faWifi } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Wifi icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Wifi = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faWifi} {...props} />;
};

export default Wifi;
