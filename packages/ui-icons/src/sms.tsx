import { faSms } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Sms icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Sms = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSms} {...props} />;
};

export default Sms;
