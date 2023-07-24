import { faArrowTurnRight } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ArrowTurnRight icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ArrowTurnRight = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faArrowTurnRight} {...props} />;
};

export default ArrowTurnRight;
