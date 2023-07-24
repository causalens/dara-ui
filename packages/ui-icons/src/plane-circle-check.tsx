import { faPlaneCircleCheck } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PlaneCircleCheck icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PlaneCircleCheck = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPlaneCircleCheck} {...props} />;
};

export default PlaneCircleCheck;
