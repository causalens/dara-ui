import { faCashRegister } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CashRegister icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CashRegister = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCashRegister} {...props} />;
};

export default CashRegister;
