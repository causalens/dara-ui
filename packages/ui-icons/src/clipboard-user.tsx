import { faClipboardUser } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ClipboardUser icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ClipboardUser = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faClipboardUser} {...props} />;
};

export default ClipboardUser;
