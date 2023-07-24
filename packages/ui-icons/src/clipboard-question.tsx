import { faClipboardQuestion } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ClipboardQuestion icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ClipboardQuestion = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faClipboardQuestion} {...props} />;
};

export default ClipboardQuestion;
