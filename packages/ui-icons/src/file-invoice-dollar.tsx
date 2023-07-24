import { faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FileInvoiceDollar icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FileInvoiceDollar = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFileInvoiceDollar} {...props} />;
};

export default FileInvoiceDollar;
