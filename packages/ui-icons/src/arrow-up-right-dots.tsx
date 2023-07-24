import { faArrowUpRightDots } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ArrowUpRightDots icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ArrowUpRightDots = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faArrowUpRightDots} {...props} />;
};

export default ArrowUpRightDots;
