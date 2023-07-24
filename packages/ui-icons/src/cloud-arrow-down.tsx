import { faCloudArrowDown } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CloudArrowDown icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CloudArrowDown = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCloudArrowDown} {...props} />;
};

export default CloudArrowDown;
