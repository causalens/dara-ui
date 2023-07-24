import { faBowlingBall } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * BowlingBall icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const BowlingBall = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBowlingBall} {...props} />;
};

export default BowlingBall;
