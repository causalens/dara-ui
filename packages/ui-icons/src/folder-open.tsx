import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FolderOpen icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FolderOpen = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFolderOpen} {...props} />;
};

export default FolderOpen;
