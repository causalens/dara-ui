import { faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * StarHalfStroke icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const StarHalfStroke = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faStarHalfStroke} {...props} />;
};

export default StarHalfStroke;
