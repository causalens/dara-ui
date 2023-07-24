import { faMoneyCheck } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * MoneyCheck icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const MoneyCheck = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMoneyCheck} {...props} />;
};

export default MoneyCheck;
