import { faRegistered } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Registered icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Registered = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faRegistered} {...props} />;
};

export default Registered;
