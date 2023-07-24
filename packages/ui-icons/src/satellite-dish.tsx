import { faSatelliteDish } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SatelliteDish icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SatelliteDish = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSatelliteDish} {...props} />;
};

export default SatelliteDish;
