import { faPassport } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Passport icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Passport = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPassport} {...props} />;
};

export default Passport;
