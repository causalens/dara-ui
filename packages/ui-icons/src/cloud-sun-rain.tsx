import { faCloudSunRain } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CloudSunRain icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CloudSunRain = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCloudSunRain} {...props} />;
};

export default CloudSunRain;
