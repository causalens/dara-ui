import { faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PhoneSquareAlt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PhoneSquareAlt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPhoneSquareAlt} {...props} />;
};

export default PhoneSquareAlt;
