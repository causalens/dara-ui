import { faCircleRight } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CircleRight icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CircleRight = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCircleRight} {...props} />;
};

export default CircleRight;
