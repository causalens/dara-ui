import { faColumns } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Columns icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Columns = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faColumns} {...props} />;
};

export default Columns;
