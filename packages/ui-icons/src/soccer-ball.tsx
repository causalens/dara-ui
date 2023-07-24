import { faSoccerBall } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SoccerBall icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SoccerBall = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSoccerBall} {...props} />;
};

export default SoccerBall;
