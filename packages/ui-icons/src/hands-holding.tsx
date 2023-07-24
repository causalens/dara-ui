import { faHandsHolding } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HandsHolding icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HandsHolding = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHandsHolding} {...props} />;
};

export default HandsHolding;
