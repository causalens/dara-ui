import { faFileDownload } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FileDownload icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FileDownload = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFileDownload} {...props} />;
};

export default FileDownload;
