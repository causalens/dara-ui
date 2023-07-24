import { faVolumeTimes } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * VolumeTimes icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const VolumeTimes = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faVolumeTimes} {...props} />;
};

export default VolumeTimes;
