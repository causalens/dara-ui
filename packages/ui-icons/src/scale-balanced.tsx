import { faScaleBalanced } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ScaleBalanced icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ScaleBalanced = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faScaleBalanced} {...props} />;
};

export default ScaleBalanced;
