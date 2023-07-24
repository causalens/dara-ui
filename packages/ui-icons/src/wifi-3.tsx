import { faWifi3 } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Wifi3 icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Wifi3 = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faWifi3} {...props} />;
};

export default Wifi3;
