import { faScaleUnbalancedFlip } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ScaleUnbalancedFlip icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ScaleUnbalancedFlip = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faScaleUnbalancedFlip} {...props} />;
};

export default ScaleUnbalancedFlip;
