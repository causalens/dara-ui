import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CircleChevronRight icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CircleChevronRight = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCircleChevronRight} {...props} />;
};

export default CircleChevronRight;
