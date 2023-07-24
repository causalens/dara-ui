import { faCircleStop } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CircleStop icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CircleStop = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCircleStop} {...props} />;
};

export default CircleStop;
