import { faBaseballBall } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * BaseballBall icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const BaseballBall = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBaseballBall} {...props} />;
};

export default BaseballBall;
