import { faVolumeDown } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * VolumeDown icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const VolumeDown = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faVolumeDown} {...props} />;
};

export default VolumeDown;
