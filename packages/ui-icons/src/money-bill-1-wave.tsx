import { faMoneyBill1Wave } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * MoneyBill1Wave icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const MoneyBill1Wave = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMoneyBill1Wave} {...props} />;
};

export default MoneyBill1Wave;
