import { faPhoneFlip } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PhoneFlip icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PhoneFlip = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPhoneFlip} {...props} />;
};

export default PhoneFlip;
