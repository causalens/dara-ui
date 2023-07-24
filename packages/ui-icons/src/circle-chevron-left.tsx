import { faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CircleChevronLeft icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CircleChevronLeft = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCircleChevronLeft} {...props} />;
};

export default CircleChevronLeft;
