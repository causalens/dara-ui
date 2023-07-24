import { faTableCellsLarge } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * TableCellsLarge icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const TableCellsLarge = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTableCellsLarge} {...props} />;
};

export default TableCellsLarge;
