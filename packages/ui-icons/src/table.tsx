import { faTable } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Table icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Table = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTable} {...props} />;
};

export default Table;
