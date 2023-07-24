import { faBurger } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Burger icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Burger = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBurger} {...props} />;
};

export default Burger;
