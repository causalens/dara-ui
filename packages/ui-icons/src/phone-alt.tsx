import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PhoneAlt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PhoneAlt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPhoneAlt} {...props} />;
};

export default PhoneAlt;
