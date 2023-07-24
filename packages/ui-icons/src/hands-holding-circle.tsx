import { faHandsHoldingCircle } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HandsHoldingCircle icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HandsHoldingCircle = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHandsHoldingCircle} {...props} />;
};

export default HandsHoldingCircle;
