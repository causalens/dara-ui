import { faLandmark } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Landmark icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Landmark = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faLandmark} {...props} />;
};

export default Landmark;
