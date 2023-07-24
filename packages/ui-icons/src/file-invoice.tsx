import { faFileInvoice } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FileInvoice icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FileInvoice = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFileInvoice} {...props} />;
};

export default FileInvoice;
