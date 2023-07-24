import { faFootballBall } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FootballBall icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FootballBall = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFootballBall} {...props} />;
};

export default FootballBall;
