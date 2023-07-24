import { mdiArrowRightBold } from '@mdi/js';

import { IconProps, StyledMDIcon } from './icon-utils';

/**
 * An ArrowRightBold icon from Material Design
 *
 * @param {IconProps} props - the component props
 */
const ArrowRightBold = (props: IconProps): JSX.Element => {
    return <StyledMDIcon path={mdiArrowRightBold} {...props} />;
};

export default ArrowRightBold;
