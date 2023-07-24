import { faEyeLowVision } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * EyeLowVision icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const EyeLowVision = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faEyeLowVision} {...props} />;
};

export default EyeLowVision;
