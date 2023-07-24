import { faCircleNodes } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CircleNodes icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CircleNodes = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCircleNodes} {...props} />;
};

export default CircleNodes;
