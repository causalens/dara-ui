import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * QuoteRight icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const QuoteRight = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faQuoteRight} {...props} />;
};

export default QuoteRight;
