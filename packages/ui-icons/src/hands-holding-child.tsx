import { faHandsHoldingChild } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HandsHoldingChild icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HandsHoldingChild = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHandsHoldingChild} {...props} />;
};

export default HandsHoldingChild;
