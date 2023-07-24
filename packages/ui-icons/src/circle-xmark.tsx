import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CircleXmark icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CircleXmark = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCircleXmark} {...props} />;
};

export default CircleXmark;
