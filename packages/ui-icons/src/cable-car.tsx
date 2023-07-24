import { faCableCar } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CableCar icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CableCar = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCableCar} {...props} />;
};

export default CableCar;
