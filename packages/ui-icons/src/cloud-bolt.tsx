import { faCloudBolt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CloudBolt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CloudBolt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCloudBolt} {...props} />;
};

export default CloudBolt;
