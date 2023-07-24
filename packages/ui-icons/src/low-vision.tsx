import { faLowVision } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * LowVision icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const LowVision = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faLowVision} {...props} />;
};

export default LowVision;
