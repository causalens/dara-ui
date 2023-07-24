import { faFileExcel } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FileExcel icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FileExcel = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFileExcel} {...props} />;
};

export default FileExcel;
