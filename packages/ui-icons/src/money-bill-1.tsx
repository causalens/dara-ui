import { faMoneyBill1 } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * MoneyBill1 icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const MoneyBill1 = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMoneyBill1} {...props} />;
};

export default MoneyBill1;
