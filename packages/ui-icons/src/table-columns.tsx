import { faTableColumns } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * TableColumns icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const TableColumns = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTableColumns} {...props} />;
};

export default TableColumns;
