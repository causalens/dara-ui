import { faQuoteRightAlt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * QuoteRightAlt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const QuoteRightAlt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faQuoteRightAlt} {...props} />;
};

export default QuoteRightAlt;
