import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * LaptopCode icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const LaptopCode = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faLaptopCode} {...props} />;
};

export default LaptopCode;
