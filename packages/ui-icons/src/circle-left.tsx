import { faCircleLeft } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CircleLeft icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CircleLeft = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCircleLeft} {...props} />;
};

export default CircleLeft;
