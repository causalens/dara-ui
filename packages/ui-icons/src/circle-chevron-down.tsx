import { faCircleChevronDown } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CircleChevronDown icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CircleChevronDown = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCircleChevronDown} {...props} />;
};

export default CircleChevronDown;
