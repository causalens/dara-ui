import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PhoneVolume icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PhoneVolume = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPhoneVolume} {...props} />;
};

export default PhoneVolume;
