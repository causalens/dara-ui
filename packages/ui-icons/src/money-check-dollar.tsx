import { faMoneyCheckDollar } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * MoneyCheckDollar icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const MoneyCheckDollar = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMoneyCheckDollar} {...props} />;
};

export default MoneyCheckDollar;
