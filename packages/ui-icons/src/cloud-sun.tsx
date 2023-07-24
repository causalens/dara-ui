import { faCloudSun } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CloudSun icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CloudSun = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCloudSun} {...props} />;
};

export default CloudSun;
