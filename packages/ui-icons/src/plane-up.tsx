import { faPlaneUp } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PlaneUp icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PlaneUp = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPlaneUp} {...props} />;
};

export default PlaneUp;
