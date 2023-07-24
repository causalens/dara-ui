import { faCloudMeatball } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CloudMeatball icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CloudMeatball = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCloudMeatball} {...props} />;
};

export default CloudMeatball;
