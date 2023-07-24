import { faPlaneCircleXmark } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PlaneCircleXmark icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PlaneCircleXmark = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPlaneCircleXmark} {...props} />;
};

export default PlaneCircleXmark;
