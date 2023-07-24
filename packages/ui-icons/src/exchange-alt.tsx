import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ExchangeAlt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ExchangeAlt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faExchangeAlt} {...props} />;
};

export default ExchangeAlt;
