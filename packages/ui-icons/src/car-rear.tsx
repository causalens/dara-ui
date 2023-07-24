import { faCarRear } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CarRear icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CarRear = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCarRear} {...props} />;
};

export default CarRear;
