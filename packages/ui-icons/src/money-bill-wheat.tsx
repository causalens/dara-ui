import { faMoneyBillWheat } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * MoneyBillWheat icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const MoneyBillWheat = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMoneyBillWheat} {...props} />;
};

export default MoneyBillWheat;
