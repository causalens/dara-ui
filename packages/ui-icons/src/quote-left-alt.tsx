import { faQuoteLeftAlt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * QuoteLeftAlt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const QuoteLeftAlt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faQuoteLeftAlt} {...props} />;
};

export default QuoteLeftAlt;
