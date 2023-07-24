import { faMobileRetro } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * MobileRetro icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const MobileRetro = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMobileRetro} {...props} />;
};

export default MobileRetro;
