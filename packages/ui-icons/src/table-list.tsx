import { faTableList } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * TableList icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const TableList = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTableList} {...props} />;
};

export default TableList;
