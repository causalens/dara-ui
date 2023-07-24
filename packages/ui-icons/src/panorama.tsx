import { faPanorama } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Panorama icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Panorama = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPanorama} {...props} />;
};

export default Panorama;
