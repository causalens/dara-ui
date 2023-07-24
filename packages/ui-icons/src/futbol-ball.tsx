import { faFutbolBall } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FutbolBall icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FutbolBall = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFutbolBall} {...props} />;
};

export default FutbolBall;
