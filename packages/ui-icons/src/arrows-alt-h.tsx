import { faArrowsAltH } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ArrowsAltH icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ArrowsAltH = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faArrowsAltH} {...props} />;
};

export default ArrowsAltH;
