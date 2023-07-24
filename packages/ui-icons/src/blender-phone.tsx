import { faBlenderPhone } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * BlenderPhone icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const BlenderPhone = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBlenderPhone} {...props} />;
};

export default BlenderPhone;
