import { faCameraRetro } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CameraRetro icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CameraRetro = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCameraRetro} {...props} />;
};

export default CameraRetro;
