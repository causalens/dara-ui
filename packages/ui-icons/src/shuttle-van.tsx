import { faShuttleVan } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ShuttleVan icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ShuttleVan = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faShuttleVan} {...props} />;
};

export default ShuttleVan;
