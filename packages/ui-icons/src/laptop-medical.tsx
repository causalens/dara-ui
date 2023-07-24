import { faLaptopMedical } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * LaptopMedical icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const LaptopMedical = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faLaptopMedical} {...props} />;
};

export default LaptopMedical;
