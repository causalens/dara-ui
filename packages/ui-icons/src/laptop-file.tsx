import { faLaptopFile } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * LaptopFile icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const LaptopFile = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faLaptopFile} {...props} />;
};

export default LaptopFile;
