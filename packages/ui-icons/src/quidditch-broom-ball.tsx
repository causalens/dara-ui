import { faQuidditchBroomBall } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * QuidditchBroomBall icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const QuidditchBroomBall = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faQuidditchBroomBall} {...props} />;
};

export default QuidditchBroomBall;
