import { faHandHoldingDroplet } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HandHoldingDroplet icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HandHoldingDroplet = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHandHoldingDroplet} {...props} />;
};

export default HandHoldingDroplet;
