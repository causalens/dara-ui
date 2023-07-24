import { faArrowsH } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ArrowsH icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ArrowsH = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faArrowsH} {...props} />;
};

export default ArrowsH;
