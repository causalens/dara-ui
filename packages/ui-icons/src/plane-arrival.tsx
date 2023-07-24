import { faPlaneArrival } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PlaneArrival icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PlaneArrival = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPlaneArrival} {...props} />;
};

export default PlaneArrival;
