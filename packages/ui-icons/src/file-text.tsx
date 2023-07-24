import { faFileText } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FileText icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FileText = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFileText} {...props} />;
};

export default FileText;
