import { faFolderBlank } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FolderBlank icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FolderBlank = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFolderBlank} {...props} />;
};

export default FolderBlank;
