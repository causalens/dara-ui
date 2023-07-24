import { faFolderPlus } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FolderPlus icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FolderPlus = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFolderPlus} {...props} />;
};

export default FolderPlus;
