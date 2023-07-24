import { faSatellite } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Satellite icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Satellite = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSatellite} {...props} />;
};

export default Satellite;
