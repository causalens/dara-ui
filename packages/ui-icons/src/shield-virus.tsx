import { faShieldVirus } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ShieldVirus icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ShieldVirus = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faShieldVirus} {...props} />;
};

export default ShieldVirus;
