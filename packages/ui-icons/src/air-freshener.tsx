import { faAirFreshener } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * AirFreshener icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const AirFreshener = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faAirFreshener} {...props} />;
};

export default AirFreshener;
