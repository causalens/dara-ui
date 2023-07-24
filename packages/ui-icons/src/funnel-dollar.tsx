import { faFunnelDollar } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FunnelDollar icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FunnelDollar = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFunnelDollar} {...props} />;
};

export default FunnelDollar;
