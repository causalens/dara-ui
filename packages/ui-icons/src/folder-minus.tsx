import { faFolderMinus } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FolderMinus icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FolderMinus = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFolderMinus} {...props} />;
};

export default FolderMinus;
