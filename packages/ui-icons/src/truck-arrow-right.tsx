import { faTruckArrowRight } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * TruckArrowRight icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const TruckArrowRight = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTruckArrowRight} {...props} />;
};

export default TruckArrowRight;
