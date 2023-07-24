import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CirclePlay icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CirclePlay = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCirclePlay} {...props} />;
};

export default CirclePlay;
