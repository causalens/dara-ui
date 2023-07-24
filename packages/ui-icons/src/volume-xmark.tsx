import { faVolumeXmark } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * VolumeXmark icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const VolumeXmark = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faVolumeXmark} {...props} />;
};

export default VolumeXmark;
