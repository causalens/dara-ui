import { faFileUpload } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FileUpload icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FileUpload = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFileUpload} {...props} />;
};

export default FileUpload;
