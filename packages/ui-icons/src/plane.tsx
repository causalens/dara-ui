import { faPlane } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Plane icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Plane = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPlane} {...props} />;
};

export default Plane;
