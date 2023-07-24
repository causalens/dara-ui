import { faGolfBall } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * GolfBall icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const GolfBall = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faGolfBall} {...props} />;
};

export default GolfBall;
