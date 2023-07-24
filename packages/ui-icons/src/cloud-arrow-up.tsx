import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CloudArrowUp icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CloudArrowUp = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCloudArrowUp} {...props} />;
};

export default CloudArrowUp;
