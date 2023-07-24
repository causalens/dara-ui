import { faCrop } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Crop icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Crop = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCrop} {...props} />;
};

export default Crop;
