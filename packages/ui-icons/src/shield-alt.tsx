import { faShieldAlt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ShieldAlt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ShieldAlt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faShieldAlt} {...props} />;
};

export default ShieldAlt;
