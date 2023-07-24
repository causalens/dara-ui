import { faCreditCard } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CreditCard icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CreditCard = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCreditCard} {...props} />;
};

export default CreditCard;
