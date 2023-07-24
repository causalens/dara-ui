import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * VolumeHigh icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const VolumeHigh = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faVolumeHigh} {...props} />;
};

export default VolumeHigh;
