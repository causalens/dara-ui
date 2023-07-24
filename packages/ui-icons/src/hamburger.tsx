import { faHamburger } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Hamburger icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Hamburger = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHamburger} {...props} />;
};

export default Hamburger;
