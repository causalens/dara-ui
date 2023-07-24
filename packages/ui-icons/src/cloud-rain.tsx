import { faCloudRain } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CloudRain icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CloudRain = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCloudRain} {...props} />;
};

export default CloudRain;
