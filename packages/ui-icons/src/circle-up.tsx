import { faCircleUp } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CircleUp icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CircleUp = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCircleUp} {...props} />;
};

export default CircleUp;
