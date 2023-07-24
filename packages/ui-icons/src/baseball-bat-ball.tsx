import { faBaseballBatBall } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * BaseballBatBall icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const BaseballBatBall = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBaseballBatBall} {...props} />;
};

export default BaseballBatBall;
