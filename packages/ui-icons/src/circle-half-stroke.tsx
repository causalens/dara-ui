import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CircleHalfStroke icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CircleHalfStroke = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCircleHalfStroke} {...props} />;
};

export default CircleHalfStroke;
