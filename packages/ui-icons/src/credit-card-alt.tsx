import { faCreditCardAlt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CreditCardAlt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CreditCardAlt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCreditCardAlt} {...props} />;
};

export default CreditCardAlt;
