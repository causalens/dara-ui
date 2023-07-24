import { faPhoneSlash } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PhoneSlash icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PhoneSlash = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPhoneSlash} {...props} />;
};

export default PhoneSlash;
