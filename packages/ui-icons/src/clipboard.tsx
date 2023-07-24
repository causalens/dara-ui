import { faClipboard } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Clipboard icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Clipboard = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faClipboard} {...props} />;
};

export default Clipboard;
