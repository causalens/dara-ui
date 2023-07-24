import { faHands } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Hands icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Hands = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHands} {...props} />;
};

export default Hands;
