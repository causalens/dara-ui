import { faPlaneCircleExclamation } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PlaneCircleExclamation icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PlaneCircleExclamation = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPlaneCircleExclamation} {...props} />;
};

export default PlaneCircleExclamation;
