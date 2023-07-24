import { faMoneyBills } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * MoneyBills icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const MoneyBills = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMoneyBills} {...props} />;
};

export default MoneyBills;
