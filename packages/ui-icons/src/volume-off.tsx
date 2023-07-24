import { faVolumeOff } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * VolumeOff icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const VolumeOff = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faVolumeOff} {...props} />;
};

export default VolumeOff;
