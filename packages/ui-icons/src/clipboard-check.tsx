import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ClipboardCheck icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ClipboardCheck = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faClipboardCheck} {...props} />;
};

export default ClipboardCheck;
