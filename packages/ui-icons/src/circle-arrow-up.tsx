import { faCircleArrowUp } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CircleArrowUp icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CircleArrowUp = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCircleArrowUp} {...props} />;
};

export default CircleArrowUp;
