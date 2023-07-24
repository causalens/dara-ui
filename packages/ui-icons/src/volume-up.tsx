import { faVolumeUp } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * VolumeUp icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const VolumeUp = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faVolumeUp} {...props} />;
};

export default VolumeUp;
