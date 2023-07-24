import { faCameraAlt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CameraAlt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CameraAlt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCameraAlt} {...props} />;
};

export default CameraAlt;
