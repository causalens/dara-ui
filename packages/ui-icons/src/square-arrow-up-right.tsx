import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SquareArrowUpRight icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SquareArrowUpRight = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSquareArrowUpRight} {...props} />;
};

export default SquareArrowUpRight;
