import { faFolderTree } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FolderTree icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FolderTree = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFolderTree} {...props} />;
};

export default FolderTree;
