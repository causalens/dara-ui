import { faCloudMoonRain } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CloudMoonRain icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CloudMoonRain = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCloudMoonRain} {...props} />;
};

export default CloudMoonRain;
