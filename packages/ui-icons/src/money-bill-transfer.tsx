import { faMoneyBillTransfer } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * MoneyBillTransfer icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const MoneyBillTransfer = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMoneyBillTransfer} {...props} />;
};

export default MoneyBillTransfer;
