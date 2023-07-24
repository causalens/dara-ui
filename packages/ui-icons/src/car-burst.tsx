import { faCarBurst } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CarBurst icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CarBurst = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCarBurst} {...props} />;
};

export default CarBurst;
