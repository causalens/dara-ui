import { faBroomBall } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * BroomBall icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const BroomBall = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBroomBall} {...props} />;
};

export default BroomBall;
