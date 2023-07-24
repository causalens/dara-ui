import { faFileArchive } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FileArchive icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FileArchive = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFileArchive} {...props} />;
};

export default FileArchive;
