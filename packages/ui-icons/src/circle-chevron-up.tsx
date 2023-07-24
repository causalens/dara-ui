import { faCircleChevronUp } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CircleChevronUp icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CircleChevronUp = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCircleChevronUp} {...props} />;
};

export default CircleChevronUp;
