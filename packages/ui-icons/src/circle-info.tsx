import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CircleInfo icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CircleInfo = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCircleInfo} {...props} />;
};

export default CircleInfo;
