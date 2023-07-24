import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CircleArrowRight icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CircleArrowRight = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCircleArrowRight} {...props} />;
};

export default CircleArrowRight;
