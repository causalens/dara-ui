import { faVolleyballBall } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * VolleyballBall icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const VolleyballBall = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faVolleyballBall} {...props} />;
};

export default VolleyballBall;
