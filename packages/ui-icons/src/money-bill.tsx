import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * MoneyBill icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const MoneyBill = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMoneyBill} {...props} />;
};

export default MoneyBill;
