import { mdiSwapHorizontal } from '@mdi/js';

import { IconProps, StyledMDIcon } from './icon-utils';

/**
 * A SwapHorizontal Icon from Material Design
 *
 * @param {IconProps} props - the component props
 */
const SwapHorizontal = (props: IconProps): JSX.Element => {
    return <StyledMDIcon path={mdiSwapHorizontal} {...props} />;
};

export default SwapHorizontal;
