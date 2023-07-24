import { faArrowsToCircle } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ArrowsToCircle icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ArrowsToCircle = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faArrowsToCircle} {...props} />;
};

export default ArrowsToCircle;
