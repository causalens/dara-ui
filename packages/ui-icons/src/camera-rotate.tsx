import { faCameraRotate } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CameraRotate icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CameraRotate = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCameraRotate} {...props} />;
};

export default CameraRotate;
