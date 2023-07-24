import { faLaptopHouse } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * LaptopHouse icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const LaptopHouse = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faLaptopHouse} {...props} />;
};

export default LaptopHouse;
