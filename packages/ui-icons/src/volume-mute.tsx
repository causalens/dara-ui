import { faVolumeMute } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * VolumeMute icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const VolumeMute = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faVolumeMute} {...props} />;
};

export default VolumeMute;
