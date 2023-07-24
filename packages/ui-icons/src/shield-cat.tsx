import { faShieldCat } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ShieldCat icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ShieldCat = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faShieldCat} {...props} />;
};

export default ShieldCat;
