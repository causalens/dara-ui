import { faArrowsAltH } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * An ArrowsHorizontal icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ArrowsHorizontal = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faArrowsAltH} {...props} />;
};

export default ArrowsHorizontal;
