import { faArrowsUpDownLeftRight } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ArrowsUpDownLeftRight icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ArrowsUpDownLeftRight = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faArrowsUpDownLeftRight} {...props} />;
};

export default ArrowsUpDownLeftRight;
