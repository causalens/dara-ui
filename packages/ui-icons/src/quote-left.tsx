import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * QuoteLeft icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const QuoteLeft = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faQuoteLeft} {...props} />;
};

export default QuoteLeft;
