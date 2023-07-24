import { faScaleUnbalanced } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ScaleUnbalanced icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ScaleUnbalanced = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faScaleUnbalanced} {...props} />;
};

export default ScaleUnbalanced;
