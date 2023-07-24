import { faHeader } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Header icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Header = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHeader} {...props} />;
};

export default Header;
