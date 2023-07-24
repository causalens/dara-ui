import { faPhoneSquare } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PhoneSquare icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PhoneSquare = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPhoneSquare} {...props} />;
};

export default PhoneSquare;
