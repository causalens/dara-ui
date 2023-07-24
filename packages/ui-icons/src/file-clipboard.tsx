import { faFileClipboard } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FileClipboard icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FileClipboard = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFileClipboard} {...props} />;
};

export default FileClipboard;
