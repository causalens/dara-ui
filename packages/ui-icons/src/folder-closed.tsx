import { faFolderClosed } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FolderClosed icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FolderClosed = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFolderClosed} {...props} />;
};

export default FolderClosed;
