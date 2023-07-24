import { faMobilePhone } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * MobilePhone icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const MobilePhone = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMobilePhone} {...props} />;
};

export default MobilePhone;
