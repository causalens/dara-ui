import { faFileExport } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FileExport icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FileExport = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFileExport} {...props} />;
};

export default FileExport;
