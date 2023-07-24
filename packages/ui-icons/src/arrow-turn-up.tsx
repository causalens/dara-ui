import { faArrowTurnUp } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ArrowTurnUp icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ArrowTurnUp = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faArrowTurnUp} {...props} />;
};

export default ArrowTurnUp;
