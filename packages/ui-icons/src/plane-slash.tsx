import { faPlaneSlash } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PlaneSlash icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PlaneSlash = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPlaneSlash} {...props} />;
};

export default PlaneSlash;
