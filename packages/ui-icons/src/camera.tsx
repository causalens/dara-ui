import { faCamera } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Camera icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Camera = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCamera} {...props} />;
};

export default Camera;
