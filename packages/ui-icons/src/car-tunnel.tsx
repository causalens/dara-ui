import { faCarTunnel } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CarTunnel icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CarTunnel = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCarTunnel} {...props} />;
};

export default CarTunnel;
