import { faShuttleSpace } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ShuttleSpace icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ShuttleSpace = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faShuttleSpace} {...props} />;
};

export default ShuttleSpace;
