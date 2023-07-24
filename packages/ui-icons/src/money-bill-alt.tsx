import { faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * MoneyBillAlt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const MoneyBillAlt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMoneyBillAlt} {...props} />;
};

export default MoneyBillAlt;
