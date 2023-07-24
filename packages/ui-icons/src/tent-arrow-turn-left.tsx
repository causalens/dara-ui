import { faTentArrowTurnLeft } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * TentArrowTurnLeft icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const TentArrowTurnLeft = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTentArrowTurnLeft} {...props} />;
};

export default TentArrowTurnLeft;
