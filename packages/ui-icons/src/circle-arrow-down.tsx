import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CircleArrowDown icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CircleArrowDown = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCircleArrowDown} {...props} />;
};

export default CircleArrowDown;
