import { faHighlighter } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Highlighter icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Highlighter = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHighlighter} {...props} />;
};

export default Highlighter;
