import { faCloudMoon } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CloudMoon icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CloudMoon = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCloudMoon} {...props} />;
};

export default CloudMoon;
