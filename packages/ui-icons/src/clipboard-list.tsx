import { faClipboardList } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ClipboardList icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ClipboardList = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faClipboardList} {...props} />;
};

export default ClipboardList;
