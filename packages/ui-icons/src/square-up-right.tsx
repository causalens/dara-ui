import { faSquareUpRight } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SquareUpRight icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SquareUpRight = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSquareUpRight} {...props} />;
};

export default SquareUpRight;
