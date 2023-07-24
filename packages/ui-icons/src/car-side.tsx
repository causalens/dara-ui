import { faCarSide } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CarSide icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CarSide = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCarSide} {...props} />;
};

export default CarSide;
