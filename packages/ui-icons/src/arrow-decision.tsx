import { mdiArrowDecision } from '@mdi/js';

import { IconProps, StyledMDIcon } from './icon-utils';

/**
 * A ArrowDecision icon from Material Design
 *
 * @param {IconProps} props - the component props
 */
const ArrowDecision = (props: IconProps): JSX.Element => {
    return <StyledMDIcon path={mdiArrowDecision} {...props} />;
};

export default ArrowDecision;
