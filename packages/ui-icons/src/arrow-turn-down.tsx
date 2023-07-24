import { faArrowTurnDown } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ArrowTurnDown icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ArrowTurnDown = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faArrowTurnDown} {...props} />;
};

export default ArrowTurnDown;
