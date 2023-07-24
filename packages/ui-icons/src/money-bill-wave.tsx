import { faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * MoneyBillWave icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const MoneyBillWave = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMoneyBillWave} {...props} />;
};

export default MoneyBillWave;
