import { faCarCrash } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CarCrash icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CarCrash = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCarCrash} {...props} />;
};

export default CarCrash;
