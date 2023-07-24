import { faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * StarHalfAlt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const StarHalfAlt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faStarHalfAlt} {...props} />;
};

export default StarHalfAlt;
