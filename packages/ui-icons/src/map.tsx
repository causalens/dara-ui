import { faMap } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Map icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Map = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMap} {...props} />;
};

export default Map;
