import { faArrowsLeftRight } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ArrowsLeftRight icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ArrowsLeftRight = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faArrowsLeftRight} {...props} />;
};

export default ArrowsLeftRight;
