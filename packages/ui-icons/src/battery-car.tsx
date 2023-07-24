import { faBatteryCar } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * BatteryCar icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const BatteryCar = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBatteryCar} {...props} />;
};

export default BatteryCar;
