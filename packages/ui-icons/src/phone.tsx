import { faPhone } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Phone icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Phone = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPhone} {...props} />;
};

export default Phone;
