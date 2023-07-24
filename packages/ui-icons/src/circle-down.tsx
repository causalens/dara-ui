import { faCircleDown } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CircleDown icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CircleDown = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCircleDown} {...props} />;
};

export default CircleDown;
