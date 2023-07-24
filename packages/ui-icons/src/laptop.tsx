import { faLaptop } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Laptop icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Laptop = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faLaptop} {...props} />;
};

export default Laptop;
