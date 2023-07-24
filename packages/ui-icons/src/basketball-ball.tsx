import { faBasketballBall } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * BasketballBall icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const BasketballBall = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBasketballBall} {...props} />;
};

export default BasketballBall;
