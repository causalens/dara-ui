import { faTableTennis } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * TableTennis icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const TableTennis = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTableTennis} {...props} />;
};

export default TableTennis;
