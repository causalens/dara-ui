import { faVolumeControlPhone } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * VolumeControlPhone icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const VolumeControlPhone = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faVolumeControlPhone} {...props} />;
};

export default VolumeControlPhone;
