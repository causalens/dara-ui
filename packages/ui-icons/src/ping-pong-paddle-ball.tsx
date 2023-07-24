import { faPingPongPaddleBall } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PingPongPaddleBall icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PingPongPaddleBall = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPingPongPaddleBall} {...props} />;
};

export default PingPongPaddleBall;
