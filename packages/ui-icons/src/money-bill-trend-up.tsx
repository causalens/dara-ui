import { faMoneyBillTrendUp } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * MoneyBillTrendUp icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const MoneyBillTrendUp = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMoneyBillTrendUp} {...props} />;
};

export default MoneyBillTrendUp;
