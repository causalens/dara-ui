import { faShieldBlank } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ShieldBlank icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ShieldBlank = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faShieldBlank} {...props} />;
};

export default ShieldBlank;
