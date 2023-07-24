import { faHand } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Hand icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Hand = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHand} {...props} />;
};

export default Hand;
