import { faMoneyBillWaveAlt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * MoneyBillWaveAlt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const MoneyBillWaveAlt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMoneyBillWaveAlt} {...props} />;
};

export default MoneyBillWaveAlt;
