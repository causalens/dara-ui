import { faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HandHoldingUsd icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HandHoldingUsd = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHandHoldingUsd} {...props} />;
};

export default HandHoldingUsd;
