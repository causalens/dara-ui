import { faWarehouse } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Warehouse icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Warehouse = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faWarehouse} {...props} />;
};

export default Warehouse;
