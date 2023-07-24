import { faHandHoldingHand } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HandHoldingHand icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HandHoldingHand = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHandHoldingHand} {...props} />;
};

export default HandHoldingHand;
