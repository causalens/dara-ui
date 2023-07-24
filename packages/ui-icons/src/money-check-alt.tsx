import { faMoneyCheckAlt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * MoneyCheckAlt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const MoneyCheckAlt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMoneyCheckAlt} {...props} />;
};

export default MoneyCheckAlt;
