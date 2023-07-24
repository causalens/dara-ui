import { faStarHalf } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * StarHalf icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const StarHalf = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faStarHalf} {...props} />;
};

export default StarHalf;
