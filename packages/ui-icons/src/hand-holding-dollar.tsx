import { faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HandHoldingDollar icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HandHoldingDollar = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHandHoldingDollar} {...props} />;
};

export default HandHoldingDollar;
