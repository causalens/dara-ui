import { faTableCells } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * TableCells icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const TableCells = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTableCells} {...props} />;
};

export default TableCells;
